#Intializations
nop = int(input("------>Enter no of Processes : "))
prolist = []
burstlist = []
wt = []
tat = []
avgwt = 0
avgtat = 0


def calDetails():
    #-----------------------------------------------------------------------------------------------------------------------------------
    #Calculation part
    prolist.sort()
    burstlist.sort()
    wt.sort()
    tat.sort()

    wt.insert(0, 0)
    tat.insert(0, burstlist[0])
    for i in range(1, len(burstlist)):
        wt.insert(i, wt[i-1]+burstlist[i-1])
        tat.insert(i, wt[i] + burstlist[i])
        global avgwt
        avgwt += wt[i]
        global avgtat
        avgtat += tat[i]
    global nop
    avgwt = float(avgwt)/nop
    avgtat = float(avgtat)/nop
    print("\n")

    #Printing processes and details
    #-----------------------------------------------------------------------------------------------------------------------------------
    print("---------------------------------------------------------------------------------------------------------------------")
    print("\tProcesses" + "\tBurst Time" +
          "\tWaiting Time" + "\tTurn Around Time")
    for i in range(nop):
        print("\t   " + prolist[i] + "\t\t   {0}".format(burstlist[i]) +
              "\t\t   {0}".format(wt[i]) + "\t\t    {0}".format(tat[i]))

    print("--------------------------------------------------------------------------------------------------------------")
    print("\t Total" + "\t\t   {0}".format(sum(burstlist)) +
          "\t\t   {0}".format(sum(wt)) + "\t\t    {0}".format(sum(tat)))

    print("\n")
    print("Average Waiting time is: "+str(avgwt))
    print("Average Turn Arount Time is: " + str(avgtat))
    print("---------------------------------------------------------------------------------------------------------------------")
    import plotly.figure_factory as ff
    df = []
    for i in range(0, nop):
        df.insert(i, dict(Task="{0}".format(i+1), Start=str(wt[i]), Finish=str(tat[i])))
    fig = ff.create_gantt(df)
    fig.show()


def main():

    for i in range(nop):
        prolist.append("P{0}".format(i + 1))

    for i in prolist:
        burstlist.append(
            int(input("------> Enter Burst time for process {0} : ".format(i))))


if __name__ == "__main__":
    main()
    calDetails()
    
