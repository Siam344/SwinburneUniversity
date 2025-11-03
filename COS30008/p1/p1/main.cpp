// main.cpp
#include "KeyProvider.h"
#include <iostream>

#define P1 // Enable Problem 1 tests

#ifdef P1
void runP1()
{
    // Corresponding to the rubric's specified output
    std::cout << "Test KeyProvider" << std::endl;

    std::string lKey = "Relations";
    std::string lPhrase1 = "To be, or not to be: that is the question:";
    std::string lPhrase2 = "Be cool";
    std::string lPhrase3 = "";

    // Test case 1
    std::cout << "First key sequence: \"";
    for (char c : KeyProvider(lKey, lPhrase1)) {
        std::cout << c;
    }
    std::cout << "\"" << std::endl;

    // Test case 2
    std::cout << "Second key sequence: \"";
    for (char c : KeyProvider(lKey, lPhrase2)) {
        std::cout << c;
    }
    std::cout << "\"" << std::endl;

    // Test case 3
    std::cout << "Third key sequence: \"";
    for (char c : KeyProvider(lKey, lPhrase3)) {
        std::cout << c;
    }
    std::cout << "\"" << std::endl;

    std::cout << "done" << std::endl;
}
#endif

int main() {
    #ifdef P1
    runP1();
    #endif

    // ... Other problem test cases would be structured similarly
    return 0;
}
