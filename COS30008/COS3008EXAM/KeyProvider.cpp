// Cos3008-Mid
//Created By NUR E SIAM


#include <stdio.h>
#include "KeyProvider.h"
#include <cctype>
#include <cassert>

KeyProvider::KeyProvider(const std::string& aKeyword, const std::string& aSource) noexcept
{
    fIndex = 0;
    std::string Ckeyword = preprocessString(aKeyword);
    std::string Csource = preprocessString(aSource);

    // goes through the length of preprocessed aSource, and for each letter, applies a preprocessed aKeyword letter
    for (size_t i = 0; i < Csource.length(); i++)
    {
        fKeys += Ckeyword[i % Ckeyword.length()];
    }

    assert(fKeys.length() == Csource.length());
}

std::string KeyProvider::preprocessString(const std::string& aString) noexcept
{
    // For each loop that goes through each letter of aString
    // Checks that it complies to isalpha()
    // make it uppercase with toupper()
    // return string

    std::string pString;
    for (char c : aString)
    {
        if (isalpha(c))
        {
            pString += toupper(c);
        }
    }
    return pString;
}

char KeyProvider::operator*() const noexcept
{
    return fKeys[fIndex];
}

KeyProvider& KeyProvider::operator++() noexcept
{
    ++fIndex;
    return *this;
}

KeyProvider KeyProvider::operator++(int) noexcept
{
    // Return's a copy before advancing
    KeyProvider temp = *this;
    ++(*this);
    return temp;
}

bool KeyProvider::operator==(const KeyProvider& aOther) const noexcept
{
    return fIndex == aOther.fIndex && fKeys == aOther.fKeys;
}

bool KeyProvider::operator!=(const KeyProvider& aOther) const noexcept
{
    return !(*this == aOther);
}

KeyProvider KeyProvider::begin() const noexcept
{
    KeyProvider temp(*this); // Creates a copy
    temp.fIndex = 0;
    return temp; // Return's the old copy
}

KeyProvider KeyProvider::end() const noexcept
{
    KeyProvider temp(*this);
    temp.fIndex = fKeys.length();
    return temp;
}
