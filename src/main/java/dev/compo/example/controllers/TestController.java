package dev.compo.example.controllers;

import dev.compo.example.annotations.CompoController;
import dev.compo.example.dto.ApiResponseDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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


    @GetMapping("/test2")
    ApiResponseDetails<Integer> getId()
    {

        var data = 5;

        var response = new ApiResponseDetails<Integer>("Наш супер объект 1 загружен");
        response.setData(data);
        response.setSuccess(true);

        return response;

    }


    @GetMapping("/test3/{id}")
    ApiResponseDetails<String> getName(@PathVariable Integer id)
    {

        var data = "Женя";
        var response = new ApiResponseDetails<String>("Наш супер объект 2 загружен");
        response.setData(data);
        response.setSuccess(true);

        return response;

    }

}
