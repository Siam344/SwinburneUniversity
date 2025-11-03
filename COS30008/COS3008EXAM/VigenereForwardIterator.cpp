
#include <cctype>
#include "VigenereForwardIterator.h"

VigenereForwardIterator::VigenereForwardIterator(const std::string& aKeyword, const std::string& aSource, EVigenereMode aMode) noexcept :
        fMode(aMode),
        fKeys(aKeyword, aSource),
        fSource(aSource),
        fIndex(-1),
        fCurrentChar('\0')
{
    initializeTable();
}

char VigenereForwardIterator::operator*() const noexcept {
    return fCurrentChar;
}

VigenereForwardIterator& VigenereForwardIterator::operator++() noexcept {
    ++fIndex;
    if (fIndex >= fSource.length()){
        return *this;
    }

    if (std::isalpha(fSource[fIndex])) {
        if (fMode == EVigenereMode::Encode)
            encodeCurrentChar();
        else
            decodeCurrentChar();

        ++fKeys;
    }
    else {
        fCurrentChar = fSource[fIndex]; // Non-alphabetic characters remain unchanged
    }


    return *this;
}

VigenereForwardIterator VigenereForwardIterator::operator++(int) noexcept {
    VigenereForwardIterator temp = *this;
    ++(*this);
    return temp;
}

bool VigenereForwardIterator::operator==(const VigenereForwardIterator& aOther) const noexcept {
    return (fIndex == aOther.fIndex);
}

bool VigenereForwardIterator::operator!=(const VigenereForwardIterator& aOther) const noexcept {
    return !(*this == aOther);
}

VigenereForwardIterator VigenereForwardIterator::begin() const noexcept {
    return *this;
}

VigenereForwardIterator VigenereForwardIterator::end() const noexcept {
    VigenereForwardIterator result = *this;
    result.fIndex = fSource.length();
    return result;
}

void VigenereForwardIterator::encodeCurrentChar() noexcept {
    char sourceChar = fSource[fIndex];
    char keyChar = std::toupper(*fKeys);

    if (std::isalpha(sourceChar)) {
        char encodedChar = fMappingTable[std::toupper(keyChar) - 'A'][std::toupper(sourceChar) - 'A'];
        if (std::islower(sourceChar)) {
            encodedChar = std::tolower(encodedChar);
        }
        fCurrentChar = encodedChar;
    } else {
        fCurrentChar = sourceChar; // Non-alphabetic characters remain unchanged
    }
}

void VigenereForwardIterator::decodeCurrentChar() noexcept {
    char sourceChar = fSource[fIndex];
    char keyChar = std::toupper(*fKeys);

    if (std::isalpha(sourceChar)) {
        char decodedChar = 'A';
        if (std::isupper(sourceChar)) {
            for (int i = 0; i < CHARACTERS; ++i) {
                if (fMappingTable[keyChar - 'A'][i] == std::toupper(sourceChar)) {
                    decodedChar = 'A' + i;
                    break;
                }
            }
        } else if (std::islower(sourceChar)) {
            for (int i = 0; i < CHARACTERS; ++i) {
                if (fMappingTable[keyChar - 'A'][i] == std::toupper(sourceChar)) {
                    decodedChar = 'a' + i;
                    break;
                }
            }
        }
        fCurrentChar = decodedChar;
    } else {
        fCurrentChar = sourceChar;
    }
}