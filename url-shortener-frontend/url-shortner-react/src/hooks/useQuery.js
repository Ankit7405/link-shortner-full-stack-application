import { useQuery } from "react-query";
import api from "../api/api";
import { data } from "react-router-dom";

export const useFetchTotalClicks = (token, onError) => {
    return useQuery("url-totalclick", 
        async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-31",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        {
            select: (data) => {
                const convertedArray = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key],
                }));
                return convertedArray;
            },
            onError,
            staleTime: 5000
        },  
    );
};

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery("my-shorturls", 
        async () => {
            return await api.get(
                "/api/urls/myurls",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        {
            select: (data) => {
                const sortedData = data.data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
                return sortedData;
            },
            onError,
            staleTime: 5000
        },  
    );
};