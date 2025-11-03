// Matrix3x3_PS1.cpp
// Created By NUR E SIAM

#include "Matrix3x3.h"
#include <iostream>

// Matrix multiplication implementation
Matrix3x3 Matrix3x3::operator*(const Matrix3x3& aOther) const noexcept {
    // Calculate the product of two matrices without using loops
    // Each entry in the resulting matrix is the dot product of a row from the first matrix
    // and a column from the second matrix

    // Calculate the dot products for each entry of the resulting matrix
    float result00 = row(0).dot(aOther.column(0));
    float result01 = row(0).dot(aOther.column(1));
    float result02 = row(0).dot(aOther.column(2));

    float result10 = row(1).dot(aOther.column(0));
    float result11 = row(1).dot(aOther.column(1));
    float result12 = row(1).dot(aOther.column(2));

    float result20 = row(2).dot(aOther.column(0));
    float result21 = row(2).dot(aOther.column(1));
    float result22 = row(2).dot(aOther.column(2));

    // Create a new matrix with the calculated entries
    Matrix3x3 result(Vector3D(result00, result01, result02),
        Vector3D(result10, result11, result12),
        Vector3D(result20, result21, result22));

    return result;
}

// Determinant calculation implementation
float Matrix3x3::det() const noexcept {
    float a = fRows[0][0], b = fRows[0][1], c = fRows[0][2];
    float d = fRows[1][0], e = fRows[1][1], f = fRows[1][2];
    float g = fRows[2][0], h = fRows[2][1], i = fRows[2][2];
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

// Check if the matrix has an inverse
bool Matrix3x3::hasInverse() const noexcept {
    return det() != 0.0f;
}

Matrix3x3 Matrix3x3::transpose() const noexcept {
    Matrix3x3 result(Vector3D(fRows[0][0], fRows[1][0], fRows[2][0]),
        Vector3D(fRows[0][1], fRows[1][1], fRows[2][1]),
        Vector3D(fRows[0][2], fRows[1][2], fRows[2][2]));
    return result;
}

Matrix3x3 Matrix3x3::inverse() const noexcept {
    if (det() == 0) {
        throw std::runtime_error("Inverse does not exist.");
    }
    float result00 = fRows[1][1] * fRows[2][2] - fRows[1][2] * fRows[2][1];
    float result01 = fRows[0][2] * fRows[2][1] - fRows[0][1] * fRows[2][2];
    float result02 = fRows[0][1] * fRows[1][2] - fRows[0][2] * fRows[1][1];

    float result10 = fRows[1][2] * fRows[2][0] - fRows[1][0] * fRows[2][2];
    float result11 = fRows[0][0] * fRows[2][2] - fRows[0][2] * fRows[2][0];
    float result12 = fRows[0][2] * fRows[1][0] - fRows[0][0] * fRows[1][2];

    float result20 = fRows[1][0] * fRows[2][1] - fRows[1][1] * fRows[2][0];
    float result21 = fRows[0][1] * fRows[2][1] - fRows[0][0] * fRows[2][1];
    float result22 = fRows[0][0] * fRows[1][1] - fRows[0][1] * fRows[1][0];

    Matrix3x3 mult(Vector3D(result00, result01, result02),
        Vector3D(result10, result11, result12),
        Vector3D(result20, result21, result22));

    Matrix3x3 output = mult * (1 / det());
    return output;

}

std::ostream& operator<<(std::ostream& os, const Matrix3x3& matrix) {
    // Output each row of the matrix
    os << "[";
    for (int i = 0; i < 3; ++i) {
        os << matrix.fRows[i].toString();
        if (i < 2) {
            os << ",";
        }
    }
    os << "]";
    return os;
}