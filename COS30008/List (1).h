#pragma once

#include <stdexcept>
#include "DoublyLinkedList.h"
#include "DoublyLinkedListIterator.h"

template <typename T>
class List {
private:
    using Node = typename DoublyLinkedList<T>::Node;

    Node fHead;     // first element
    Node fTail;     // last element
    size_t fSize;   // number of elements

public:
    using Iterator = DoublyLinkedListIterator<T>;

    // default constructor
    List() noexcept : fHead(nullptr), fTail(nullptr), fSize(0) {}

    // copy constructor
    List(const List& aOther) : fHead(nullptr), fTail(nullptr), fSize(0) {
        for (const auto& item : aOther) {
            push_back(item);
        }
    }

    // copy assignment
    List& operator=(const List& aOther) {
        if (this != &aOther) {
            List temp(aOther);
            swap(temp);
        }
        return *this;
    }

    // move constructor
    List(List&& aOther) noexcept : fHead(std::move(aOther.fHead)), fTail(std::move(aOther.fTail)), fSize(aOther.fSize) {
        aOther.fHead = nullptr;
        aOther.fTail = nullptr;
        aOther.fSize = 0;
    }

    // move assignment
    List& operator=(List&& aOther) noexcept {
        if (this != &aOther) {
            fHead = std::move(aOther.fHead);
            fTail = std::move(aOther.fTail);
            fSize = aOther.fSize;

            aOther.fHead = nullptr;
            aOther.fTail = nullptr;
            aOther.fSize = 0;
        }
        return *this;
    }

    // swap elements
    void swap(List& aOther) noexcept {
        std::swap(fHead, aOther.fHead);
        std::swap(fTail, aOther.fTail);
        std::swap(fSize, aOther.fSize);
    }

    // basic operations
    size_t size() const noexcept {
        return fSize;
    }

    template <typename U>
    void push_front(U&& aData) {
        Node newNode = DoublyLinkedList<T>::makeNode(std::forward<U>(aData));

        if (fHead) {
            newNode->fNext = fHead;
            fHead->fPrevious = newNode;
        }
        else {
            fTail = newNode;
        }

        fHead = newNode;
        fSize++;
    }

    template <typename U>
    void push_back(U&& aData) {
        Node newNode = DoublyLinkedList<T>::makeNode(std::forward<U>(aData));

        if (fTail) {
            newNode->fPrevious = fTail;
            fTail->fNext = newNode;
        }
        else {
            fHead = newNode;
        }

        fTail = newNode;
        fSize++;
    }

    void remove(const T& aElement) noexcept {
        for (Node current = fHead; current; current = current->fNext) {
            if (current->fData == aElement) {
                if (current == fHead) {
                    fHead = current->fNext;
                }
                if (current == fTail) {
                    fTail = current->fPrevious.lock();
                }
                current->isolate();
                fSize--;
                break;
            }
        }
    }

    const T& operator[](size_t aIndex) const {
        if (aIndex >= fSize) {
            throw std::out_of_range("Index out of bounds");
        }

        Node current = fHead;
        for (size_t i = 0; i < aIndex; ++i) {
            current = current->fNext;
        }
        return current->fData;
    }

    // iterator interface
    Iterator begin() const noexcept {
        return Iterator(fHead, fTail).begin();
    }

    Iterator end() const noexcept {
        return Iterator(fHead, fTail).end();
    }

    Iterator rbegin() const noexcept {
        return Iterator(fHead, fTail).rbegin();
    }

    Iterator rend() const noexcept {
        return Iterator(fHead, fTail).rend();
    }
};