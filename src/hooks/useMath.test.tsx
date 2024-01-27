
import { renderHook,act } from "@testing-library/react";
import useMath from "./useMath";

describe ('useMath unit testing', () =>{

    test('useMath result should be 0', () => {
        const hook = renderHook(()=> useMath ({a:0, b:0}));
        expect(hook.result.current.result).toBe(0);
      });

    test('useMath rseult should be 10', () => {
        const hook = renderHook(()=> useMath ({a:3, b:7}));
        act(() => {
            hook.result.current.addition()
        })
        expect(hook.result.current.result).toBe(10);
      });

    test('useMath result should be 10', () => {
        const hook = renderHook(()=> useMath ({a:20, b:10}));
        act(() => {
            hook.result.current.substraction()
        })
        expect(hook.result.current.result).toBe(10);
      });

    test('useMath result  should be 10', () => {
        const hook = renderHook(()=> useMath ({a:5, b:2}));
        act(() => {
            hook.result.current.multiplay()
        })
        expect(hook.result.current.result).toBe(10);
      });
})