// Assignment 3
// created by Nur E Siam

#include "ifstream12.h"
#include <cassert>
#include <limits>
#include <iostream>
using namespace std;

ifstream12::ifstream12(const char* aFileName, size_t aBufferSize) :
    fBuffer(new std::byte[aBufferSize]),
    fBufferSize(aBufferSize),
    fByteCount(0),
    fByteIndex(0),
    fBitIndex(7) 
{
    if (aFileName != nullptr)
    {
        open(aFileName);
    }
}

ifstream12::~ifstream12()
{
    close();
    delete[] fBuffer;
}

void ifstream12::open(const char* aFileName) 
{
    assert(!isOpen()); 
    fIStream.open(aFileName, std::ifstream::binary);
    if (isOpen())
    {
        fetch_data();
    }
}

void ifstream12::close() 
{
    if (isOpen()) 
    {
        fIStream.close();
    }
}

bool ifstream12::isOpen() const 
{
    return fIStream.is_open();
}

bool ifstream12::good() const
{
    return fIStream.good() && (fByteCount > 0 || !fIStream.eof());
}

bool ifstream12::eof() const
{
    return fByteCount == 0;
}

void ifstream12::fetch_data()
{
    fIStream.read(reinterpret_cast<char*>(fBuffer), fBufferSize);
    fByteCount = fIStream.gcount(); 
    fByteIndex = 0;
    fBitIndex = 7;
}

void ifstream12::reset() 
{
    for (size_t i = 0; i < fBufferSize; i++)
    {
        fBuffer[i] = std::byte{ 0 };
    }
    fByteCount = 0;
    fByteIndex = 0;
    fBitIndex = 7;
}

ifstream12& ifstream12::operator>>(size_t& aValue)
{
    aValue = 0;
    for (size_t i = 0; i < 12; i++)
    {
        std::optional<size_t> bitOpt = readBit();
        if (!bitOpt.has_value())
        { 
            break;                  
        }
        if (bitOpt.value() == 1) 
        {  
            aValue |= static_cast<size_t>(bitOpt.value()) << i;
        }
    }
    return *this;
}

std::optional<size_t> ifstream12::readBit() 
{
    if (fByteCount == 0) 
    {
        if (fIStream.eof()) 
        {
            return std::nullopt;  
        }
        fetch_data();
    }

    if (fByteCount == 0) 
    {
        return std::nullopt;
    }
    std::byte lByte = fBuffer[fByteIndex] & (std::byte{ 1 } << fBitIndex);
    size_t bitValue = std::to_integer<size_t>(lByte);

    fBitIndex--;
    if (fBitIndex < 0) 
    {
        fBitIndex = 7;
        fByteIndex++;
        fByteCount--;
    }

    if (bitValue == 0) 
    {
        return 0;
    }
    else 
    {
        return 1;
    }
}
