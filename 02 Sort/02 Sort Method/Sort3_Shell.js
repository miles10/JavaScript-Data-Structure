import {SortBasic} from '../01 Basic example/SortBasic.js';

// 希尔排序法 Shell
 
class Shell extends SortBasic 
{
    sort(a)
    {
        let N = a.length;
        // 增量选择为 (1/2)*(3^k - 1)
        // 选择一个合适的分组 h
        let h = 1;
        while(h < N/3)
        {
            h = h*3 + 1;
        }
        // 循环直到h=1
        while(h >= 1)
        {
            for(let i = h; i < N; i++)
            {
                for(let j = i; j >= h; j = j - h)
                {
                    if(this.less(a[j], a[j-h]))
                    {
                        this.exch(a, j, j-h);
                    }
                }
            }
            h = parseInt(h/3);
        }
    }
}


let a = [6, 1, 2, 3, 4, 5, 2, 7, 8];
// exited with code=0 in 0.123 seconds
// let a = [0, 1, 2, 3, 4, 5];
// exited with code=0 in 0.116 seconds
let array_change = new Shell;
array_change.sort(a);
array_change.show(a);