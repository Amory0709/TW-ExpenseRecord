using ExpenseRecord.Models;

namespace ExpenseRecord
{
    public interface IExpenseServcie
    {
        List<Expense> GetExpenseRecords();
        bool AddExpense(Expense expense);
        bool RemoveExpense(Expense expense);
    }
}
