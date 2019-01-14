class StudentInfo {
      constructor() {
         this.paymentPercentage;
         this.expectedIncome;
         this.loanInterest;
         this.studentLoan;
         this.numberOfYears;
      }

      initiateNumberOfYears() {
         var temporaryLoan = this.studentLoan;
         this.numberOfYears = 0;
         while (temporaryLoan > 0)
         {
            temporaryLoan = temporaryLoan * (1 + this.loanInterest) - this.paymentPercentage * this.expectedIncome;
            this.numberOfYears++;
         }
      }

      planGeneration() {
         var temporaryLoan = this.studentLoan * 1;
         var userPayment = this.paymentPercentage * this.expectedIncome;
         for (var i = 0; i <= this.numberOfYears; i++) {
            textAlign(LEFT, TOP);
            textSize(20);

            if (i == 0) {
               text(i, 10, 330);
               text('$0.00', 100, 330);
               text('$' + temporaryLoan, 220, 330 + 30 * i);
            }
            else {
               text(i, 10, 330 + 30 * i);
               if (temporaryLoan <= userPayment) {
                  text('$' + temporaryLoan.toFixed(2), 100, 330 + 30 * i);
                  text('$0.00', 220, 330 + 30 * i);
               }

               else {
                  temporaryLoan = temporaryLoan * (1 + user.loanInterest) - userPayment;
                  text('$' + userPayment.toFixed(2), 100, 330 + 30 * i);
                  text('$' + temporaryLoan.toFixed(2), 220, 330 + 30 * i);
               }
            }
         }

      }


}
