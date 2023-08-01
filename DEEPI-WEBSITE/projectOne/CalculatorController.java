package com.myapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {

    @PostMapping("/calculate")
    public String calculate(@RequestParam("num1") double num1,
                            @RequestParam("num2") double num2,
                            @RequestParam("operator") String operator,
                            Model model) {
        double result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    model.addAttribute("error", "Cannot divide by zero!");
                    return "calculator"; // Return to the calculator page with an error message
                }
                break;
            default:
                model.addAttribute("error", "Invalid operator!");
                return "calculator"; // Return to the calculator page with an error message
        }

        model.addAttribute("result", result);
        return "calculator"; // Return to the calculator page with the result
    }
}