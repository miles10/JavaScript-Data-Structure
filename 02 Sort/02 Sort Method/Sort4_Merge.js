import {SortBasic} from '../01 Basic example/SortBasic.js';

// 原地归并排序法 Merge
 
class Merge extends SortBasic 
{
    // 输入 数组a 最小位置 lo 中间理顺位置mid 最大位置 hi
    sort(a, lo, mid, hi)
    {
        let i = lo, j = mid + 1;

        // 复制一个数组
        let au = a.slice();

        for(let k = lo; k <= hi; k++)
        {
            if(i > mid)
            {
                a[k] = au[j];
                j++;
            }
            else if(j > hi)
            {
                a[k] = au[i];
                i++;
            }
            else if(this.less(au[i], au[j]))
            {
                a[k] = au[i];
                i++;
            }
            else
            {
                a[k] = au[j];
                j++;
            }
        }
        
    }
}


let a = [1, 3, 5, 2, 4, 6];

let array_change = new Merge;
array_change.sort(a, 0, 2, 5);
array_change.show(a);