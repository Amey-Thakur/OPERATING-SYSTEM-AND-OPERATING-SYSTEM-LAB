"""
============================================================================
 Shortest Job First (SJF) Scheduling Algorithm (Non-Preemptive)
============================================================================

 @file        SJF_Scheduling_Algorithm.py
 @author      Amey Thakur
 @repository  https://github.com/Amey-Thakur/OPERATING-SYSTEM-AND-OPERATING-SYSTEM-LAB
 @experiment  Experiment 5 - Operating System Lab

 @description SJF is a scheduling algorithm that selects the waiting process
              with the smallest execution time to execute next. This implementation
              is non-preemptive (processes execute until completion).

 @algorithm   1. Input the number of processes and their burst times.
              2. Sort the processes based on Burst Time (Ascending).
              3. Calculate Waiting Time (WT):
                 WT[i] = WT[i-1] + BurstTime[i-1]
              4. Calculate Turn Around Time (TAT):
                 TAT[i] = WT[i] + BurstTime[i]
              5. Calculate Averages.

============================================================================
"""

# Global lists to store process data
process_data = []   # List of dictionaries/objects to keep ID and BT together
waiting_time = []
turnaround_time = []

# Global variables for averages
avg_waiting_time = 0
avg_turnaround_time = 0
num_processes = 0


def calculate_metrics():
    """
    Calculates Waiting Time and Turnaround Time for sorted processes.
    """
    global avg_waiting_time, avg_turnaround_time
    
    # -------------------- Sorting Part --------------------
    # Sort processes by Burst Time (Key: 'bt')
    # Using lambda function to sort list of dicts based on burst time
    process_data.sort(key=lambda x: x['bt'])
    
    # -------------------- Calculation Part --------------------
    
    # First process (shortest) has 0 waiting time
    waiting_time.append(0)
    
    # First process TAT is its burst time
    turnaround_time.append(process_data[0]['bt'])
    
    # Loop through remaining processes
    for i in range(1, num_processes):
        # WT = Previous WT + Previous BT
        current_wt = waiting_time[i-1] + process_data[i-1]['bt']
        waiting_time.append(current_wt)
        
        # TAT = Current WT + Current BT
        current_tat = current_wt + process_data[i]['bt']
        turnaround_time.append(current_tat)
    
    # Calculate sums
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
    print("   SJF SCHEDULING ALGORITHM RESULTS (Sorted by Burst Time)")
    print("=" * 100)
    
    # Print Table Header
    print(f"{'Process':<15} {'Burst Time':<15} {'Waiting Time':<15} {'Turnaround Time':<15}")
    print("-" * 100)
    
    # Print Table Rows
    total_bt = 0
    for i in range(num_processes):
        p_id = process_data[i]['id']
        p_bt = process_data[i]['bt']
        total_bt += p_bt
        
        print(f"{p_id:<15} {p_bt:<15} {waiting_time[i]:<15} {turnaround_time[i]:<15}")
    
    print("-" * 100)
    
    # Print Totals
    print(f"{'Total':<15} {total_bt:<15} {sum(waiting_time):<15} {sum(turnaround_time):<15}")
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
    print("   SJF Scheduling Algorithm Input")
    print("--------------------------------------------------")
    
    try:
        num_processes = int(input("Enter number of processes: "))
        
        print("\nEnter Burst Time for each process:")
        for i in range(num_processes):
            p_name = f"P{i + 1}"
            bt = int(input(f"  Burst time for process {p_name} : "))
            
            # Store in a dictionary to keep ID and Burst Time linked during sort
            process_data.append({'id': p_name, 'bt': bt})
            
    except ValueError:
        print("\n[Error] Please enter valid integer values.")
        return

    # Perform calculations (Sorting happens inside)
    calculate_metrics()
    
    # Display results
    display_results()


if __name__ == "__main__":
    main()
