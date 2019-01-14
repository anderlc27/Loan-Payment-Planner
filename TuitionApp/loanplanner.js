var font, loanInput, interestInput, majorInput, salaryInput, button;
let user, inRange, display = false, year = 0;
let userDistributionInput = [];
let numberOfClicks = 0;

function preload() {
   font = loadFont("font/Gobold_Bold.ttf");
}

function setup() {
   var canvas = createCanvas(600,300);
   textFont(font);

   loanInput = createInput('e.g. 80000');
   loanInput.style('width', '100px');
   loanInput.position(230, 90);

   interestInput = createInput('e.g. 8');
   interestInput.style('width','50px');
   interestInput.position(230, 130);

   salaryInput = createInput('e.g. 100000');
   salaryInput.style('width', '100px');
   salaryInput.position(230, 170);
   
   paymentPercentage = createInput('e.g. 16.3');
   paymentPercentage.style('width', '50px')
   paymentPercentage.position(230, 210);

   button = createButton('Generate Plan');
   button.position(20, 260);


   user = new StudentInfo();

}

function draw() {
   background("White");

   if (mouseX >= 10 && mouseX <= 120 && mouseY  >= 255 && mouseY <= 275) {
      inRange = true;
   }
   else {
      inRange = false;
   }

   textAlign(CENTER, TOP);
   textSize(40);
   fill("Black");
   text("LOAN PAYMENT PLANNER", 300, 0);
   textAlign(LEFT, TOP);
   textSize(20);
   fill("Black");
   text("Loan Amount:", 10, 80);
   text("$", 200, 80)
   text("Loan Interest:", 10, 120);
   text("%", 290, 120);
   text("Expected Salary:", 10, 160);
   text("$", 200, 160);
   text("Payment from Salary:", 10, 200);
   text("%", 290, 200);

   if (display) {
      textAlign(LEFT, TOP);
      textSize(20);
      text("Year", 10, 300);
      text("Payment", 100, 300);
      text("Left To Pay", 220, 300);
      user.planGeneration();
   }

}

function userInfoSet() {
   user.studentLoan = loanInput.value();
   user.loanInterest = interestInput.value()/100;
   user.paymentPercentage = paymentPercentage.value()/100;
   user.expectedIncome = salaryInput.value();
   user.initiateNumberOfYears();
   year = user.numberOfYears;
}

function windowResized() {
  resizeCanvas(600, 400 + year*30);
}

function mousePressed() {
   if (inRange) {
      userInfoSet();
      display = true;
      numberOfClicks++;
      windowResized();
   }
}
