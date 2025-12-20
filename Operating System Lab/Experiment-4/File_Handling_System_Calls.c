/**
 * ============================================================================
 * File Handling System Calls
 * ============================================================================
 * 
 * @file        File_Handling_System_Calls.c
 * @author      Amey Thakur
 * @repository  https://github.com/Amey-Thakur/OPERATING-SYSTEM-AND-OPERATING-SYSTEM-LAB
 * @experiment  Experiment 4 - Operating System Lab
 * 
 * @description This program demonstrates basic file handling system calls in C.
 *              It allows the user to:
 *              1. create a file,
 *              2. write data to the file, and
 *              3. read data from the file.
 * 
 * @functions   fopen()  - Opens a file
 *              fclose() - Closes a file
 *              fprintf()- Writes formatted output to a file
 *              fgetc()  - Reads a character from a file
 *              scanf()  - Reads input from standard input
 *              printf() - Writes output to standard output
 * 
 * ============================================================================
 */

#include <stdio.h>

/**
 * @brief Main function to demonstrate file operations
 * @return 0 on successful execution
 */
int main()
{
    /* File pointer to handle file operations */
    FILE *fp;
    
    /* Variables to store file name and character buffer */
    char ch;
    char filename[50];
    char data[100];
    
    printf("============================================\n");
    printf("     File Handling System Calls Demo\n");
    printf("============================================\n\n");
    
    /* -------------------- 1. Open/Create File -------------------- */
    printf("Enter the filename to create/open: ");
    scanf("%s", filename);
    
    /* Open file in write mode ("w")
       If file doesn't exist, it is created. If it exists, content is cleared. */
    fp = fopen(filename, "w");
    
    if (fp == NULL) {
        printf("Error: Could not open file.\n");
        return 1;
    }
    
    /* Close the file immediately (just creating it for now) */
    fclose(fp);
    printf("File '%s' created successfully.\n\n", filename);
    
    /* -------------------- 2. Write to File -------------------- */
    /* Re-open file in write mode to add content */
    fp = fopen(filename, "w");
    
    printf("Enter content to write to the file:\n");
    
    /* Clear input buffer before reading string with spaces */
    while ((getchar()) != '\n'); 
    
    /* Read a line of text (including spaces) from user */
    scanf("%[^\n]s", data);
    
    /* Write user input to the file */
    fprintf(fp, "%s", data);
    
    /* Close the file to save changes */
    fclose(fp);
    printf("Data written to file successfully.\n\n", filename);
    
    /* -------------------- 3. Read from File -------------------- */
    printf("Reading content from '%s':\n", filename);
    printf("--------------------------------------------\n");
    
    /* Open file in read mode ("r") */
    fp = fopen(filename, "r");
    
    if (fp == NULL) {
        printf("Error: Could not read file.\n");
        return 1;
    }
    
    /* Read character by character until End Of File (EOF) */
    ch = fgetc(fp);
    while (ch != EOF)
    {
        printf("%c", ch);
        ch = fgetc(fp);
    }
    
    /* Close the final file handler */
    fclose(fp);
    
    printf("\n--------------------------------------------\n");
    printf("\nFile operation completed successfully.\n");
    
    return 0;
}
