
import {screen, fireEvent, render, waitFor} from "@testing-library/react";
import AppProvider, { useUser } from "./AppProvider";

describe('AppProvider unit testing', () => {
    
    test('AppProvider should be return correct value', async () => {
        const dummyUser = {
            firstName: "Iman",
            lastName: "Maris",
            email: "marisiman99@gmail.com"
        }

        const TestComponent = () => {
        
            const context = useUser()
            const { setUser, user } = context

            const getUserData = () => {
                setUser?.(dummyUser)
            }

            return (
                <>
                    <div>
                        <p>{`Name: ${user?.firstName}`}</p>
                        <button onClick={getUserData}>New User</button>
                    </div>  
                </>
            )
        };

        render(
            <AppProvider>
                <TestComponent/>
            </AppProvider>
        )

      expect(screen.getByText('New User')).toBeDefined();
      await waitFor (() => fireEvent.click(screen.getByRole('button')))
      expect(screen.getByText(`Name: ${dummyUser.firstName}`)).toBeDefined();

    });
  
});