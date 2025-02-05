package com.url.url_shortner_backend.controller;

import com.url.url_shortner_backend.Models.UrlMapping;
import com.url.url_shortner_backend.service.UrlMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedirectController {

    @Autowired
    private UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){
        UrlMapping originalUrlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if(originalUrlMapping != null){
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", originalUrlMapping.getOriginalUrl());
            return ResponseEntity.status(302).headers(headers).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
