import React, { useEffect } from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import { useStockItemContext } from '../hooks/useStockItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { AiFillDelete } from 'react-icons/ai';

function Notifications() {
  const { stockItems, dispatch } = useStockItemContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchStockItems = async () => {
      try {
        const response = await fetch('/api/item', {
          headers: { 'Authorization': `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'GET_STOCKITEMS', payload: json.items });
        }
      } catch (error) {
        console.error('Error fetching stock items:', error);
      }
    };

    if (user) {
      fetchStockItems();
    }
  }, [dispatch, user]);

  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div>
        {stockItems?.map((stockItem) => {
          const expiryDate = new Date(stockItem.expDate);
          const today = new Date();
          const daysDifference = differenceInDays(expiryDate, today);

          if (daysDifference < 30 && daysDifference > 0) {
            return (
              <div
                key={stockItem.id}
                className='flex justify-around w-[500px] items-center h-[100px] bg-aliceBlue rounded-lg my-4'
              >
                <h3>{stockItem.itemName} is remaining {daysDifference} days to expire</h3>
                <AiFillDelete />
              </div>
            );
          } else if (daysDifference === 0) {
            return (
              <div
                key={stockItem.id}
                className='flex justify-around w-[500px] h-[100px] items-center bg-aliceBlue rounded-lg my-4'
              >
                <h3>{stockItem.itemName} expires today</h3>
                <AiFillDelete className='cursor-pointer' />
              </div>
            );
          } else if (daysDifference < 0) {
            return (
              <div
                key={stockItem.id}
                className='flex justify-around w-[500px] h-[100px] items-center bg-aliceBlue rounded-lg my-4'
              >
                <h3>{stockItem.itemName} has already expired</h3>
                <AiFillDelete />
              </div>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
}

export default Notifications;
