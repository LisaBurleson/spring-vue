package com.akimeka.backend;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping({"/", "/hello"})
    public String hello(Model model) {
        model.addAttribute("name", "Foo");
        return "index";
    }
}
