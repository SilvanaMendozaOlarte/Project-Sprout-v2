const farm = document.getElementById('farm-view')

const tom = document.getElementById('tomatoes')

const plots = document.getElementById('daily-goal')

const btn = document.getElementById('submit-tomatoes')

const global_btn = document.getElementById('tab_farm')

function render()
{

    const num_tom = Number(tom.value)
    const num_plots = Number(plots.value)
    if(isNaN(num_tom)  || isNaN(num_plots))
    {
        alert('both inputs must be numbers')
        return;
    }
    farm.innerHTML=''
    
    let j = num_tom
    let l = num_plots

    for(let i = 0; i< 25; i++)
    {
        let elem = document.createElement('div')
        if(i !== 12){
        elem.classList.add('plot')
        elem.classList.add('plot-container')
        }
        else{
        elem.classList.add('house-container')
        let elem2 = document.createElement('div')
        elem2.classList.add('house')
        elem.appendChild(elem2)
        farm.appendChild(elem)
        continue;
        }
        if(l > 0)
        {
            elem.classList.add('goal-plot')
            l--;
        }

        if(j > 0)
        {
            for(let k = 0; k< 9; k++)
            {
                let elem2 = document.createElement('div')
                if(k === 0 || k === 2 || k === 6 || k === 8)
                    elem2.classList.add('tom')
                else
                    elem2.classList.add('trans')
                elem.appendChild(elem2)
            }
            j--;
        }
        farm.appendChild(elem)
    }
    
}

btn.addEventListener('click',render)
global_btn.addEventListener('click',render)
