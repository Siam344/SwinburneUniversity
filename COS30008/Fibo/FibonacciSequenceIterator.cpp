// COS30008
// Created by Nur E Siam

#include "FibonacciSequenceIterator.h"

// Constructor for Fibonacci sequence iterator
FibonacciSequenceIterator::FibonacciSequenceIterator(const FibonacciSequenceGenerator& aSequenceObject,
    long long aStart) noexcept
    : fSequenceObject(aSequenceObject), fIndex(aStart) {}

// Dereference operator to retrieve the current Fibonacci number
const long long& FibonacciSequenceIterator::operator*() const noexcept {
    return *fSequenceObject;
}

// Pre-increment operator to move to the next Fibonacci number
FibonacciSequenceIterator& FibonacciSequenceIterator::operator++() noexcept {
    fSequenceObject.next();
    ++fIndex;
    return *this;
}

// Post-increment operator to move to the next Fibonacci number
FibonacciSequenceIterator FibonacciSequenceIterator::operator++(int) noexcept {
    FibonacciSequenceIterator temp = *this;
    ++(*this);
    return temp;
}

// Equality operator to check if two iterators point to the same index
bool FibonacciSequenceIterator::operator==(const FibonacciSequenceIterator& aOther) const noexcept {
    return fIndex == aOther.fIndex;
}

// Inequality operator to check if two iterators point to different indices
bool FibonacciSequenceIterator::operator!=(const FibonacciSequenceIterator& aOther) const noexcept {
    return fIndex != aOther.fIndex;
}

// Get the iterator pointing to the beginning of the sequence
FibonacciSequenceIterator FibonacciSequenceIterator::begin() const noexcept {
    return FibonacciSequenceIterator(fSequenceObject, 1);
}

// Get the iterator pointing to the end of the sequence
FibonacciSequenceIterator FibonacciSequenceIterator::end() const noexcept {
    return FibonacciSequenceIterator(fSequenceObject, 93);
}
