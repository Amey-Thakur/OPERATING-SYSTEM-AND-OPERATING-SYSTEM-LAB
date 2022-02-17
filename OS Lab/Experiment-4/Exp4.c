#include<stdio.h>

int main()
{
	FILE *fp;
	char ch;
	char fn[20];
	char data[100];
	
	printf("Enter file Name : ");
	scanf("%s",fn);
	fp = fopen(fn, "w");
	fclose(fp);
	
	
	fp = fopen(fn, "w");
	printf("Enter file Content : \n");
	if(getchar()!="\n"){
		scanf("%[^\t\n]s",data);
		}
	fprintf(fp,"%s",data);
	fclose(fp);
	
	fp= fopen(fn,"r");
	while(ch!=EOF)
	{
		printf("%c", ch);
		ch= fgetc(fp);
		}
		fclose(fp);
	}

