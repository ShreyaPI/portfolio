import numpy as np

# Fast Fourier Transform (FFT) for Convolution
def fft_convolution(signal, kernel):
    """Perform 1D convolution using FFT for efficiency."""
    # Pad signal and kernel to same length (next power of 2 for FFT efficiency)
    n = len(signal) + len(kernel) - 1
    n_fft = 2 ** int(np.ceil(np.log2(n)))  # Next power of 2
    signal_padded = np.pad(signal, (0, n_fft - len(signal)), mode='constant')
    kernel_padded = np.pad(kernel, (0, n_fft - len(kernel)), mode='constant')
    
    # Compute FFT of signal and kernel
    signal_fft = np.fft.fft(signal_padded)
    kernel_fft = np.fft.fft(kernel_padded)
    
    # Multiply in frequency domain and inverse FFT
    result_fft = signal_fft * kernel_fft
    result = np.fft.ifft(result_fft)
    
    # Trim to original convolution length and return real part
    return np.real(result[:n])

# Standard Convolution for Comparison
def standard_convolution(signal, kernel):
    """Perform 1D convolution directly (slower)."""
    n = len(signal) + len(kernel) - 1
    result = np.zeros(n)
    kernel = np.flip(kernel)  # Flip kernel for convolution
    for i in range(n):
        for j in range(len(kernel)):
            if i - j >= 0 and i - j < len(signal):
                result[i] += signal[i - j] * kernel[j]
    return result

# Strassen's Algorithm for 2x2 Matrix Multiplication
def strassen_2x2(A, B):
    """Strassen's algorithm for 2x2 matrix multiplication."""
    # Extract elements
    a11, a12, a21, a22 = A[0,0], A[0,1], A[1,0], A[1,1]
    b11, b12, b21, b22 = B[0,0], B[0,1], B[1,0], B[1,1]
    
    # Strassen's seven products
    p1 = a11 * (b12 - b22)
    p2 = (a11 + a12) * b22
    p3 = (a21 + a22) * b11
    p4 = a22 * (b21 - b11)
    p5 = (a11 + a22) * (b11 + b22)
    p6 = (a12 - a22) * (b21 + b22)
    p7 = (a11 - a21) * (b11 + b12)
    
    # Compute result matrix elements
    c11 = p5 + p4 - p2 + p6
    c12 = p1 + p2
    c21 = p3 + p4
    c22 = p5 + p1 - p3 - p7
    
    return np.array([[c11, c12], [c21, c22]])

# Standard Matrix Multiplication for Comparison
def standard_matrix_mult(A, B):
    """Standard matrix multiplication for 2x2 matrices."""
    return np.dot(A, B)

# Demo
if __name__ == "__main__":
    print("=== FFT Convolution Demo ===")
    signal = np.array([1, 2, 3, 4, 5], dtype=float)
    kernel = np.array([0.5, 1, 0.5], dtype=float)
    
    fft_result = fft_convolution(signal, kernel)
    std_result = standard_convolution(signal, kernel)
    
    print("Signal:", signal)
    print("Kernel:", kernel)
    print("FFT Convolution Result:", fft_result)
    print("Standard Convolution Result:", std_result)
    print("Results match (within tolerance):", np.allclose(fft_result, std_result))
    
    print("\n=== Strassen's Matrix Multiplication Demo ===")
    A = np.array([[1, 2], [3, 4]], dtype=float)
    B = np.array([[5, 6], [7, 8]], dtype=float)
    
    strassen_result = strassen_2x2(A, B)
    std_result = standard_matrix_mult(A, B)
    
    print("Matrix A:\n", A)
    print("Matrix B:\n", B)
    print("Strassen's Result:\n", strassen_result)
    print("Standard Result:\n", std_result)
    print("Results match (within tolerance):", np.allclose(strassen_result, std_result))