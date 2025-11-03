// KeyProvider.h

#pragma once

#include <string>
#include <cassert>
#include <algorithm>

class KeyProvider {
private:
    std::string fKeys;
    size_t fIndex;

    // Helper function to preprocess the string
    std::string preprocessString(const std::string& aString) noexcept {
        std::string upperOnly;
        std::for_each(aString.begin(), aString.end(), [&upperOnly](char c) {
            if (isalpha(c)) {
                upperOnly += toupper(c);
            }
        });
        return upperOnly;
    }

public:
    // Constructor that initializes fKeys and fIndex
    KeyProvider(const std::string& aKeyword, const std::string& aSource) noexcept
        : fIndex(0) {
        std::string preprocessedKeyword = preprocessString(aKeyword);
        std::string preprocessedSource = preprocessString(aSource);
        while (fKeys.size() < preprocessedSource.size()) {
            fKeys += preprocessedKeyword;
        }
        fKeys = fKeys.substr(0, preprocessedSource.size());

        // Assert to ensure fKeys is correctly sized
        assert(fKeys.size() == preprocessedSource.size());
    }

    // Dereference operator that returns the current character
    char operator*() const noexcept {
        return fIndex < fKeys.size() ? fKeys[fIndex] : '\0';
    }

    // Prefix increment operator that advances the iterator
    KeyProvider& operator++() noexcept {
        if (fIndex < fKeys.size()) ++fIndex;
        return *this;
    }

    // Postfix increment operator that advances the iterator and returns the old value
    KeyProvider operator++(int) noexcept {
        KeyProvider temp(*this);
        operator++();
        return temp;
    }

    // Equality operator that compares the position and the underlying collection
    bool operator==(const KeyProvider& aOther) const noexcept {
        return fIndex == aOther.fIndex || fIndex >= fKeys.size();
    }

    // Inequality operator that relies on operator==
    bool operator!=(const KeyProvider& aOther) const noexcept {
        return !(*this == aOther);
    }

    // Begin function that returns a copy of this iterator at the first character
    KeyProvider begin() const noexcept {
        return *this;
    }

    // End function that returns a copy of this iterator just past the last character
    KeyProvider end() const noexcept {
        KeyProvider temp(*this);
        temp.fIndex = fKeys.size();
        return temp;
    }
};
