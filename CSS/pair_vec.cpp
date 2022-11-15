
//pairs in vectorssss
#include<bits/stdc++.h>
using namespace std;

void printvec(vector<pair<int,string>>&v){
    cout<<"size : "<<v.size()<<endl;
    for(int i=0;i<v.size();i++)
    {
        cout<<"1st : "<<v[i].first<<" 2nd : "<<v[i].second<<endl;
    }
}
int main(){
    vector<pair<int,string>>v={{1,"viper"},{3,"no brain"}};
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int x;
        char y[10];
        cin>>x>>y;
        v.push_back(make_pair(x,y));
    }
    printvec(v);
    return 0;
}