export class SortBasic{
    // 比小函数 less
    less(something1, something2)
    {
        return (something1 < something2)
    }

    // 比大函数 less
    big(something1, something2)
    {
        return (something1 > something2)
    }

    // 输入数组中 i,j 位置 交换元素位置 exch
    exch(array1, i, j)
    {
        let temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
        
    }

    // 打印数组
    show(array1)
    {   
        // for(let i = 0; i < array1.length; i++)
        // {
        //     console.log(array1[i]);
        // }
        console.table(array1);
    }

    // 检查是否排序正确
    isSorted(array1)
    {
        for(let i = 1; i < array1.length; i++)
        {
            if(this.big(array1[i-1], array1[i]))
            {
                return false;
            }
        }
        return true;
    }
}