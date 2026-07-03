#include <iostream>
using namespace std;
class student
{
    public:
    int a , b ;
    public:
    void get()
    {
        cout<<"enter the data for a:"<<endl;
        cin>>a;
        cout<<"enter the data for b:"<<endl;
        cin>>b;
    }
    void display()
    {
        cout<<" The data members are:"<<a<<endl<<b<<endl;
    }
};
int main()
{
    student obj;
    obj.get();
    obj.display();
    return 0;
}