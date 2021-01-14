import {SortBasic} from '../01 Basic example/SortBasic.js';

// 选择排序法
// 继承 SortBasic 中的 less big exch show isSorted 方法
class Selection extends SortBasic 
{
    sort(a)
    {
        let N = a.length;
        for(let i = 0; i < N; i++)
        {
            let min = i;
            for(let j = i + 1; j < N; j++)
            {
                if(!this.less(a[i], a[j]))
                {
                    min = j;
                }
            }
            // 循环结束找到最小的元素位置 min 然后交换对应位置元素
            this.exch(a, i, min);
        }
    }
}


let a = [5, 4, 1, 2, 0];
let array_change = new Selection;
array_change.sort(a);
array_change.show(a);