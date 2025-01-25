# SolidJS

## About global Functioning

- Components are functions called only once. Unlike React, even when a reactive value changes, the components don't get rerendered.

## Signals (states)

- A signal is an array of two functions. The first one is a **getter** (to use whenever we want to use the actual value held by the signal, like displaying it) and the second one is a **setter** (to use whenever we want to update the value).

- Updating signals is just like upating states in React.

```tsx

    export default function Component = ()=> {

        const [appearance,toggleAppearance] = createSignal(false);
        const [numbers,setNumbers] = createSignal([0,1,3,6])

        setInterval(()=>{
            toggleAppearance((prev)=>!prev)
            setNumbers((prev)=>[...prev,Math.random().toString()])
        },2000)


        return (
            <>
                <button>
                    {appearance() ? 'Shown' : 'Hidden'}
                </button>
            <>
        )
    }

```
## Props

- Do not destructure them
- For dynamic classes, use the classList prop (on elements) which accepts an object whose properties are the classes to apply and the values booleans (true or false) to determine if and when to apply the class.

```tsx

    export default function Component = (props)=> {

        return (
            <div class='normal-class' classList={{
                'round-card' : props.rounded,
                'show-images' : props.image ? true : false
            }}>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        )

    }

```
## Event handlers

Works just like in React