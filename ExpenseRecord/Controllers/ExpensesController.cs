using ExpenseRecord.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpensesController : ControllerBase
{
    private readonly IExpenseServcie _expenseServcie;

    public ExpensesController(IExpenseServcie expenseServcie)
    {
        _expenseServcie = expenseServcie;
    }
    [HttpGet]
    public List<Expense> getExpenseList()
    {
        return _expenseServcie.GetExpenseRecords();
    }
    [HttpPost]
    public int addExpense([FromBody] Expense expense)
    {
        var isAdded = _expenseServcie.AddExpense(expense);
        return isAdded ? 200 : 500;
    }
    [HttpDelete]
    public int deleteExpense([FromBody] Expense expense)
    {
        var isDeleted = _expenseServcie.RemoveExpense(expense);
        return isDeleted ? 200 : 500;
    }
}