using ExpenseRecord.Models;

namespace ExpenseRecord
{
    public class ExpenseService:IExpenseServcie
    {
        List<Expense> records;
        public ExpenseService()
        {
            records = new List<Expense>();
            records.Add(new Expense() { Amount = 10, Description = "Example expense", Date = "2022-10-24", Type = "Training" });
        }

        public List<Expense> GetExpenseRecords()
        {
            return records;
        }

        public bool AddExpense(Expense expense)
        {
            try
            {
                records.Add(expense);
                return true;
            } catch (Exception ex)
            {
                return false;
            }
            
        }
        public bool RemoveExpense(Expense expense)
        {
            try
            {
                records.Remove(expense);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            
        }
    }
}
