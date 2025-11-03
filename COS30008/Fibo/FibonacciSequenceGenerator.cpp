// COS30008
// Created by Nur E Siam

#include "FibonacciSequenceGenerator.h"
#include <cassert>

// Constructor initializes the Fibonacci sequence generator
FibonacciSequenceGenerator::FibonacciSequenceGenerator(const std::string& aID) noexcept
    : fID(aID), fPrevious(0), fCurrent(1) {}

// Getter for the generator ID
const std::string& FibonacciSequenceGenerator::id() const noexcept {
    return fID;
}

// Dereference operator overload to retrieve the current Fibonacci number
const long long& FibonacciSequenceGenerator::operator*() const noexcept {
    return fCurrent;
}

// Conversion operator to bool to check if there are more Fibonacci numbers
FibonacciSequenceGenerator::operator bool() const noexcept {
    return hasNext();
}

// Reset the generator to the initial state
void FibonacciSequenceGenerator::reset() noexcept {
    fPrevious = 0;
    fCurrent = 1;
}

// Check if there are more Fibonacci numbers in the sequence
bool FibonacciSequenceGenerator::hasNext() const noexcept {
    return fCurrent <= LLONG_MAX - fPrevious;
}

// Generate the next Fibonacci number in the sequence
void FibonacciSequenceGenerator::next() noexcept {
    long long temp = fCurrent;
    fCurrent += fPrevious;
    fPrevious = temp;
}
