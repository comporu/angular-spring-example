package dev.compo.example.controllers;

import dev.compo.example.annotations.CompoController;
import dev.compo.example.dto.ApiResponseDetails;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.Map;

@CompoController
public class TestController {


    @GetMapping("/test")
    ApiResponseDetails<Map<String, Integer>> getObject()
    {

        var data = new HashMap<String, Integer>();
        data.put("id", 15);
        data.put("price", 300);
        data.put("age", 25);

        var response = new ApiResponseDetails<Map<String, Integer>>("Наш супер объект загружен");
        response.setData(data);
        response.setSuccess(true);

        return response;

    }

}
