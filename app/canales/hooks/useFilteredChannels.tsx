"use client";
import { createClient } from "@/app/utils/supabase/client";
import { useState, useEffect } from "react";
import { ICategory } from "../interfaces/ICategory";
import { IChannel } from "../interfaces/IChannel";
import { ILanguage } from "../interfaces/ILanguage";

// Custom hook for channel filtering
export const useFilteredChannels = (
  channels: IChannel[],
  languageIds: number[],
  categoryIds: number[],
  allLanguages: ILanguage[],
  allCategories: ICategory[]
) => {
  const [filteredChannels, setFilteredChannels] = useState<IChannel[]>(channels);
  const supabase = createClient();

  useEffect(() => {
    const fetchFilteredChannels = async () => {
      const languages = languageIds.length ? languageIds : allLanguages.map(l => l.id);
      const categories = categoryIds.length ? categoryIds : allCategories.map(c => c.id);

      try {
        const { data, error } = await supabase
          .from('channel')
          .select(`
            *,
            channel_category!inner (category!inner (id, name)),
            channel_language!inner (language!inner (id, name))
          `)
          .in('channel_category.category.id', categories)
          .in('channel_language.language.id', languages);

        if (error) throw error;
        setFilteredChannels(data as IChannel[]);
      } catch (error) {
        console.error("Filter error:", error);
      }
    };

    fetchFilteredChannels();
  }, [languageIds, categoryIds, allLanguages, allCategories, supabase]);

  return filteredChannels;
};
