"""
============================================================================
 First-Come, First-Served (FCFS) Scheduling Algorithm
============================================================================

 @file        FCFS_Scheduling_Algorithm.py
 @author      Amey Thakur
 @repository  https://github.com/Amey-Thakur/OPERATING-SYSTEM-AND-OPERATING-SYSTEM-LAB
 @experiment  Experiment 5 - Operating System Lab

 @description FCFS is the simplest CPU scheduling algorithm. In this scheme,
              the process that requests the CPU first is allocated the CPU
              first. It is non-preemptive in nature.

 @algorithm   1. Input the number of processes.
              2. Input the burst time for each process.
              3. Calculate Waiting Time (WT):
                 WT[i] = WT[i-1] + BurstTime[i-1] (for i > 0)
                 WT[0] = 0
              4. Calculate Turn Around Time (TAT):
                 TAT[i] = WT[i] + BurstTime[i]
              5. Calculate Average WT and Average TAT.

============================================================================
"""

# Global lists to store process data
processes = []      # List of process IDs (e.g., P1, P2)
burst_time = []     # Burst time for each process
waiting_time = []   # Waiting time for each process
turnaround_time = [] # Turnaround time for each process

# Global variables for averages
avg_waiting_time = 0
avg_turnaround_time = 0
num_processes = 0


def calculate_metrics():
    """
    Calculates Waiting Time and Turnaround Time for all processes
    and computes the averages.
    """
    global avg_waiting_time, avg_turnaround_time
    
    # -------------------- Calculation Part --------------------
    
    # First process has 0 waiting time
    waiting_time.insert(0, 0)
    
    # First process TAT is just its burst time
    turnaround_time.insert(0, burst_time[0])
    
    # Loop through remaining processes
    for i in range(1, len(burst_time)):
        # Waiting Time = Previous Process WT + Previous Process Burst Time
        waiting_time.insert(i, waiting_time[i-1] + burst_time[i-1])
        
        # Turnaround Time = Current Process WT + Current Process Burst Time
        turnaround_time.insert(i, waiting_time[i] + burst_time[i])
    
    # Calculate sums for averages
    avg_waiting_time = sum(waiting_time)
    avg_turnaround_time = sum(turnaround_time)

    # Calculate final averages
    avg_waiting_time = float(avg_waiting_time) / num_processes
    avg_turnaround_time = float(avg_turnaround_time) / num_processes


def display_results():
    """
    Displays the scheduling schedule table and average metrics.
    """
    print("\n")
    print("=" * 100)
    print("   FCFS SCHEDULING ALGORITHM RESULTS")
    print("=" * 100)
    
    # Print Table Header
    print(f"{'Process':<15} {'Burst Time':<15} {'Waiting Time':<15} {'Turnaround Time':<15}")
    print("-" * 100)
    
    # Print Table Rows
    for i in range(num_processes):
        print(f"{processes[i]:<15} {burst_time[i]:<15} {waiting_time[i]:<15} {turnaround_time[i]:<15}")
    
    print("-" * 100)
    
    # Print Totals
    print(f"{'Total':<15} {sum(burst_time):<15} {sum(waiting_time):<15} {sum(turnaround_time):<15}")
    print("-" * 100)
    
    print("\nPerformance Metrics:")
    print(f"Average Waiting Time      : {avg_waiting_time:.2f}")
    print(f"Average Turnaround Time   : {avg_turnaround_time:.2f}")
    print("=" * 100)
    print("\n")


def main():
    """
    Main function to drive the application.
    """
    global num_processes
    
    print("--------------------------------------------------")
    print("   FCFS Scheduling Algorithm Input")
    print("--------------------------------------------------")
    
    try:
        num_processes = int(input("Enter number of processes: "))
        
        # Initialize process IDs
        for i in range(num_processes):
            processes.append(f"P{i + 1}")
            
        print("\nEnter Burst Time for each process:")
        for process in processes:
            bt = int(input(f"  Burst time for process {process}: "))
            burst_time.append(bt)
            
    except ValueError:
        print("\n[Error] Please enter valid integer values.")
        return

    # Perform calculations
    calculate_metrics()
    
    # Display results
    display_results()


if __name__ == "__main__":
    main()
