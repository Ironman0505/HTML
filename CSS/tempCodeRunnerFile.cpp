#include <bits/stdc++.h>
using namespace std;
int hsh[260];
int main() {
    string str;;
    int cnt1=0,cnt2=0,k;
    cin>>str;
    if(str.size()==0){
    cout<<0<<endl;
    return 0;
    }
    for(int i=0;i<str.size();i++){
        hsh[str[i]]++;
    if(hsh[str[i]]==1)
        cnt1++;
        else{
            if(cnt1>cnt2)
        cnt2=cnt1;
        for(int j=0;j<260;j++)
        hsh[j]=0;
        cnt1=0;
        }
    }
    if(cnt2>cnt1)
    cout<<cnt2<<endl;
    else
    cout<<cnt1<<endl;
    return 0;
}