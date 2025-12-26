<!-- =========================================================================================
                                     HEADER SECTION
     ========================================================================================= -->
<div align="center">

  <!-- Title -->
  # Operating System Lab

  <!-- Subtitle -->
  ### CSL404 · Semester IV · Computer Engineering

  <!-- Badges -->
  [![Curated by](https://img.shields.io/badge/Curated%20by-Amey%20Thakur-blue.svg)](https://github.com/Amey-Thakur)
  [![Programs](https://img.shields.io/badge/Programs-3-yellowgreen.svg)](#quick-navigation)
  [![Language](https://img.shields.io/badge/Language-C-blueviolet.svg)](./)
  [![Language](https://img.shields.io/badge/Language-Python-blue.svg)](./)
  [![Lab Manual](https://img.shields.io/badge/Lab%20Manual-Available-brightgreen.svg)](PRACTICAL%20LAB.pdf)

  <!-- Short Description -->
  **A comprehensive collection of 3 programs across 2 experiments implementing core operating system concepts including system calls and CPU scheduling algorithms using C and Python.**

  ---

  <!-- Navigation Links -->
  [How to Use](#how-to-use) &nbsp;·&nbsp; [Learning Path](#learning-path) &nbsp;·&nbsp; [Lab Manual](#lab-manual) &nbsp;·&nbsp; [Experiment 4](#experiment-4-file-handling-system-calls-1-program) &nbsp;·&nbsp; [Experiment 5](#experiment-5-cpu-scheduling-algorithms-2-programs)

</div>

---

> [!TIP]
> **Process Visualization**: Always draw process state diagrams and Gantt charts on paper before coding scheduling algorithms. Trace through each time quantum, calculate waiting/turnaround times step-by-step, and visualize memory allocation patterns. Understanding the underlying state transitions and resource allocation is essential for implementing efficient OS simulations.

> [!WARNING]
> **Environment Requirements**: C programs require **GCC Compiler** for compilation. Python programs require **Python 3.x**. Ensure your development environment is properly configured before running the experiments.

---

<!-- =========================================================================================
                                     HOW TO USE
     ========================================================================================= -->
## How to Use

### Running C Programs (Experiment 4)

Requires GCC Compiler.

```bash
gcc filename.c -o filename
./filename
```

### Running Python Programs (Experiment 5)

Requires Python 3.x.

```bash
python filename.py
```

---

<!-- =========================================================================================
                                     LEARNING PATH
     ========================================================================================= -->
## Learning Path

**System Fundamentals:**
- Start with **Experiment 4** to understand how OS interacts with files at a low level
- Learn about `fopen`, `fclose`, `fprintf`, and `fscanf`

**Process Management:**
- Move to **Experiment 5** to understand how the CPU decides which process to run
- Compare **FCFS** (Queue based) vs **SJF** (Time based) performance

---

<!-- =========================================================================================
                                     LAB MANUAL
     ========================================================================================= -->
## Lab Manual

| # | Resource | Description |
|:-:|:---|:---|
| 1 | [PRACTICAL LAB.pdf](PRACTICAL%20LAB.pdf) | Complete laboratory manual with all experiments |

---

<!-- =========================================================================================
                                     EXPERIMENT 4
     ========================================================================================= -->
## Experiment 4: File Handling System Calls (1 Program)

| # | Program | Algorithm | Description |
|:-:|:---|:---|:---|
| 1 | [File_Handling_System_Calls.c](Experiment-4/File_Handling_System_Calls.c) | File I/O | Create, open, read, and write operations using system calls |

---

<!-- =========================================================================================
                                     EXPERIMENT 5
     ========================================================================================= -->
## Experiment 5: CPU Scheduling Algorithms (2 Programs)

| # | Program | Algorithm | Description |
|:-:|:---|:---|:---|
| 1 | [FCFS_Scheduling_Algorithm.py](Experiment-5/FCFS_Scheduling_Algorithm.py) | First-Come, First-Served | Simplest non-preemptive scheduling |
| 2 | [SJF_Scheduling_Algorithm.py](Experiment-5/SJF_Scheduling_Algorithm.py) | Shortest Job First | Optimization for minimum waiting time |



---

<!-- =========================================================================================
                                     FOOTER SECTION
     ========================================================================================= -->
<div align="center">

  <!-- Footer Navigation -->
  [↑ Back to Top](#operating-system-lab)

  [How to Use](#how-to-use) &nbsp;·&nbsp; [Learning Path](#learning-path) &nbsp;·&nbsp; [Lab Manual](#lab-manual) &nbsp;·&nbsp; [Experiment 4](#experiment-4-file-handling-system-calls-1-program) &nbsp;·&nbsp; [Experiment 5](#experiment-5-cpu-scheduling-algorithms-2-programs)

  <br>

  **[🏠 Back to Main Repository](../)**

</div>

---

<div align="center">

  ### [Operating System and Operating System Lab](../)

  **CSC405 & CSL404 · Semester IV · Computer Engineering**

  *University of Mumbai · Curated by [Amey Thakur](https://github.com/Amey-Thakur)*

</div>
