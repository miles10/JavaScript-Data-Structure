import {SortBasic} from '../01 Basic example/SortBasic.js';

// 插入排序法

class Insertion extends SortBasic 
{
    sort(a)
    {
        let N = a.length;
        for(let i = 1; i < N; i++)
        {
            for(let j = i; j > 0; j--)
            {
                if(this.less(a[j], a[j-1]))
                {
                    this.exch(a, j, j-1);
                }
            }
        }
    }
}


let a = [5, 4, 1, 2, 1, 0];
// exited with code=0 in 0.123 seconds
// let a = [0, 1, 2, 3, 4, 5];
// exited with code=0 in 0.116 seconds
let array_change = new Insertion;
array_change.sort(a);
array_change.show(a);