// Cos3008-Mid
//Created By NUR E SIAM


#include <cctype>
#include "VigenereForwardIterator.h"

VigenereForwardIterator::VigenereForwardIterator(const std::string& aKeyword, const std::string& aSource, EVigenereMode aMode) noexcept : fMode(aMode),
fKeys(aKeyword, aSource),
fSource(aSource),
fIndex(-1),
fCurrentChar('\0')
{
    initializeTable();
}

char VigenereForwardIterator::operator*() const noexcept
{
    return fCurrentChar;
}

VigenereForwardIterator& VigenereForwardIterator::operator++() noexcept
{
    ++fIndex;
    if (fIndex >= fSource.length())
    {
        return *this;
    }

    if (std::isalpha(fSource[fIndex]))
    {
        if (fMode == EVigenereMode::Encode)
            encodeCurrentChar();
        else
            decodeCurrentChar();

        ++fKeys;
    }
    else
    {
        fCurrentChar = fSource[fIndex]; // Non-alphabetic characters remain unchanged
    }

    return *this;
}

VigenereForwardIterator VigenereForwardIterator::operator++(int) noexcept
{
    VigenereForwardIterator temp = *this;
    ++(*this);
    return temp;
}

bool VigenereForwardIterator::operator==(const VigenereForwardIterator& aOther) const noexcept
{
    return (fIndex == aOther.fIndex);
}

bool VigenereForwardIterator::operator!=(const VigenereForwardIterator& aOther) const noexcept
{
    return !(*this == aOther);
}

VigenereForwardIterator VigenereForwardIterator::begin() const noexcept
{
    return *this;
}

VigenereForwardIterator VigenereForwardIterator::end() const noexcept
{
    VigenereForwardIterator res = *this;
    res.fIndex = fSource.length();
    return res;
}

void VigenereForwardIterator::encodeCurrentChar() noexcept
{
    char sourceCharacter = fSource[fIndex];
    char keyCharacter = std::toupper(*fKeys);

    if (std::isalpha(sourceCharacter))
    {
        char encodedCharacter = fMappingTable[std::toupper(keyCharacter) - 'A'][std::toupper(sourceCharacter) - 'A'];
        if (std::islower(sourceCharacter))
        {
            encodedCharacter = std::tolower(encodedCharacter);
        }
        fCurrentChar = encodedCharacter;
    }
    else
    {
        fCurrentChar = sourceCharacter;
    }
}

void VigenereForwardIterator::decodeCurrentChar() noexcept
{
    char sourceCharacter = fSource[fIndex];
    char keyCharacter = std::toupper(*fKeys);

    if (std::isalpha(sourceCharacter))
    {
        char decodedCharacter = 'A';
        if (std::isupper(sourceCharacter))
        {
            for (int i = 0; i < CHARACTERS; ++i)
            {
                if (fMappingTable[keyCharacter - 'A'][i] == std::toupper(sourceCharacter))
                {
                    decodedCharacter = 'A' + i;
                    break;
                }
            }
        }
        else if (std::islower(sourceCharacter))
        {
            for (int i = 0; i < CHARACTERS; ++i)
            {
                if (fMappingTable[keyCharacter - 'A'][i] == std::toupper(sourceCharacter))
                {
                    decodedCharacter = 'a' + i;
                    break;
                }
            }
        }
        fCurrentChar = decodedCharacter;
    }
    else
    {
        fCurrentChar = sourceCharacter;
    }
}