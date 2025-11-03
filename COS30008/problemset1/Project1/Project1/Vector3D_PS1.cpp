// Vector3D_PS1.cpp
// Created by NUR E SIAM

#include "Vector3D.h"  
#include <sstream>     

std::string Vector3D::toString() const noexcept {
    // Create a stringstream to build the output string
    std::stringstream stream;

    // Format x, y, and w components with 4 decimal places and add to the stream 
    stream << "[" << std::round(x() * 10000.0f) / 10000.0f << ","
        << std::round(y() * 10000.0f) / 10000.0f << ","
        << std::round(w() * 10000.0f) / 10000.0f << "]";

    // Extract the formatted string from the stringstream
    std::string output = stream.str();

    // Return the formatted string representation of the vector
    return output;
}
