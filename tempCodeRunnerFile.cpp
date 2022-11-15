#include<bits/stdc++.h>
using namespace std;
int hsh[26];
int main(){
    int cnt1=0,cnt2=0;
    string s;
    cin>>s;
    for(int i=0;i<s.size();i++){
        hsh[s[i]-'a']++;
        if(hsh[s[i]-'a']==1)
            cnt1++;
        else{
            if(cnt1>cnt2)
            cnt2=cnt1;
            for(int j=1;j<=26;j++)
                hsh[j]=0;
            cnt1=0;
        }
    }
    if(cnt1>cnt2)
        cout<<cnt1<<endl;
    else
        cout<<cnt2<<endl;
        return 0;
}