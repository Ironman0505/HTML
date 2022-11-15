#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k=1;
        vector<int>v;
        cin>>n;
        for(int i=0;i<n;i++)
        {
            int x;
            cin>>x;
            v.push_back(x);
        }
        sort(v.begin(),v.end());
       for(int i=1;i<v.size();i++) {
           if(v[i]==v[i-1])
           i++;
           else
           k++;
       }
       
       cout<<k+1<<endl;
    }
}