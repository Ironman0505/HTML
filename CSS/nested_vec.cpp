#include <bits/stdc++.h>
//its array of vectorssss
using namespace std;
void print(vector<int> &v)
{
    cout << "size :" << v.size() << endl;
    for (int i = 0; i < v.size(); i++)
        cout << v[i] << " ";
    cout << endl;
}
int main()
{
    int N;
    cin >> N;
    vector<int> v[N];
    for (int i = 0; i < N; i++)
    {
        int n;
        cin >> n;
        for (int j = 0; j < n; j++)
        {
            int x;
            cin >> x;
            v[i].push_back(x);
        }
    }
    cout << endl;
    for (int k = 0; k < N; k++)
        print(v[k]);
    return 0;
}