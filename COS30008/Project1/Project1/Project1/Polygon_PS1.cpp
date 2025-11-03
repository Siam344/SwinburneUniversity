#include "Polygon.h"
#include <cmath>

float Polygon::getSignedArea() const noexcept {
    float area = 0.0f;
    for (size_t i = 0; i < fNumberOfVertices; ++i) {
        if (i == fNumberOfVertices - 1)
        {
            size_t j = 0;
            area = area + fVertices[i].x() * fVertices[j].y() - fVertices[j].x() * fVertices[i].y();
        }
        else {
            size_t j = i + 1;
            area = area + fVertices[i].x() * fVertices[j].y() - fVertices[j].x() * fVertices[i].y();
        }
    }
    return area / 2.0f;
}

Polygon Polygon::transform(const Matrix3x3& aMatrix) const noexcept {
    Polygon transformed;
    transformed.fNumberOfVertices = fNumberOfVertices;
    size_t i = 0;
    size_t j = fNumberOfVertices;
    while (i <= j) {
        Vector3D Vertex = aMatrix * Vector3D(fVertices[i].x(), fVertices[i].y(), 1.0f);
        transformed.fVertices[i] = Vector2D(Vertex.x(), Vertex.y());


        Vertex = aMatrix * Vector3D(fVertices[j].x(), fVertices[j].y(), 1.0f);
        transformed.fVertices[j] = Vector2D(Vertex.x(), Vertex.y());

        i++;
        j--;
    }

    return transformed;
}