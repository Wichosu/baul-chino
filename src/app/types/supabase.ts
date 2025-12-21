export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  mock_test: {
    Tables: {
      hsk_level: {
        Row: {
          id: number
          level: string
        }
        Insert: {
          id?: number
          level?: string
        }
        Update: {
          id?: number
          level?: string
        }
        Relationships: []
      }
      image_for_listening_match_image_audio_single_image: {
        Row: {
          alt: Json | null
          id: number
          image: string | null
          imageFallback: string | null
        }
        Insert: {
          alt?: Json | null
          id?: number
          image?: string | null
          imageFallback?: string | null
        }
        Update: {
          alt?: Json | null
          id?: number
          image?: string | null
          imageFallback?: string | null
        }
        Relationships: []
      }
      image_for_reading_match_image: {
        Row: {
          alt: Json | null
          id: number
          image: string
          imageFallback: string
        }
        Insert: {
          alt?: Json | null
          id?: number
          image?: string
          imageFallback?: string
        }
        Update: {
          alt?: Json | null
          id?: number
          image?: string
          imageFallback?: string
        }
        Relationships: []
      }
      listening_match_image_audio: {
        Row: {
          alt: Json | null
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id: number
          img: string
          imgFallback: string
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
        }
        Insert: {
          alt?: Json | null
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id?: number
          img: string
          imgFallback: string
          mockTest: string
          questionNumber?: string
          questionType: number
          sectionType: number
        }
        Update: {
          alt?: Json | null
          answer?: Database["public"]["Enums"]["letter_range"]
          audio?: string
          id?: number
          img?: string
          imgFallback?: string
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Relationships: [
          {
            foreignKeyName: "listening_match_image_audio_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_match_image_audio_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_match_image_audio_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      listening_match_image_audio_single_image: {
        Row: {
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id: number
          image: number | null
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
        }
        Insert: {
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id?: number
          image?: number | null
          mockTest: string
          questionNumber?: string
          questionType: number
          sectionType: number
        }
        Update: {
          answer?: Database["public"]["Enums"]["letter_range"]
          audio?: string
          id?: number
          image?: number | null
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Relationships: [
          {
            foreignKeyName: "listening_match_image_audio_single_image_image_fkey"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "image_for_listening_match_image_audio_single_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_match_image_audio_single_image_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_match_image_audio_single_image_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_match_image_audio_single_image_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      listening_select_phrase: {
        Row: {
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id: number
          image: string
          imageFallback: string
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
        }
        Insert: {
          answer: Database["public"]["Enums"]["letter_range"]
          audio: string
          id?: number
          image: string
          imageFallback: string
          mockTest: string
          questionNumber?: string
          questionType: number
          sectionType: number
        }
        Update: {
          answer?: Database["public"]["Enums"]["letter_range"]
          audio?: string
          id?: number
          image?: string
          imageFallback?: string
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Relationships: [
          {
            foreignKeyName: "listening_select_phrase_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_select_phrase_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_select_phrase_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      listening_true_false: {
        Row: {
          alt: string | null
          answer: boolean
          audio: string
          id: number
          image: string
          imgFallback: string
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
        }
        Insert: {
          alt?: string | null
          answer: boolean
          audio: string
          id?: number
          image: string
          imgFallback: string
          mockTest: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Update: {
          alt?: string | null
          answer?: boolean
          audio?: string
          id?: number
          image?: string
          imgFallback?: string
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Relationships: [
          {
            foreignKeyName: "listening_true_false_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_true_false_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listening_true_false_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      mock_test: {
        Row: {
          hsk_level: number | null
          id: string
          name: string
        }
        Insert: {
          hsk_level?: number | null
          id?: string
          name?: string
        }
        Update: {
          hsk_level?: number | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "mock_test_hsk_level_fkey"
            columns: ["hsk_level"]
            isOneToOne: false
            referencedRelation: "hsk_level"
            referencedColumns: ["id"]
          },
        ]
      }
      question_type: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name?: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      reading_match_image: {
        Row: {
          answer: Database["public"]["Enums"]["letter_range"]
          id: number
          image: number
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
          sentenceHanzi: string
          sentencePinyin: string
        }
        Insert: {
          answer: Database["public"]["Enums"]["letter_range"]
          id?: number
          image: number
          mockTest?: string
          questionNumber: string
          questionType: number
          sectionType: number
          sentenceHanzi?: string
          sentencePinyin?: string
        }
        Update: {
          answer?: Database["public"]["Enums"]["letter_range"]
          id?: number
          image?: number
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
          sentenceHanzi?: string
          sentencePinyin?: string
        }
        Relationships: [
          {
            foreignKeyName: "reading_match_image_image_fkey"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "image_for_reading_match_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_match_image_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_match_image_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_match_image_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      reading_true_false: {
        Row: {
          alt: string | null
          answer: boolean
          id: number
          image: string
          imageFallback: string
          mockTest: string
          questionNumber: string
          questionType: number
          sectionType: number
        }
        Insert: {
          alt?: string | null
          answer: boolean
          id?: number
          image: string
          imageFallback: string
          mockTest?: string
          questionNumber?: string
          questionType: number
          sectionType: number
        }
        Update: {
          alt?: string | null
          answer?: boolean
          id?: number
          image?: string
          imageFallback?: string
          mockTest?: string
          questionNumber?: string
          questionType?: number
          sectionType?: number
        }
        Relationships: [
          {
            foreignKeyName: "reading_true_false_mockTest_fkey"
            columns: ["mockTest"]
            isOneToOne: false
            referencedRelation: "mock_test"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_true_false_questionType_fkey"
            columns: ["questionType"]
            isOneToOne: false
            referencedRelation: "question_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_true_false_sectionType_fkey"
            columns: ["sectionType"]
            isOneToOne: false
            referencedRelation: "section_type"
            referencedColumns: ["id"]
          },
        ]
      }
      section_type: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      channel: {
        Row: {
          description: string
          id: number
          name: string
          url: string
        }
        Insert: {
          description?: string
          id?: number
          name?: string
          url?: string
        }
        Update: {
          description?: string
          id?: number
          name?: string
          url?: string
        }
        Relationships: []
      }
      channel_category: {
        Row: {
          category_id: number
          channel_id: number
          id: number
        }
        Insert: {
          category_id: number
          channel_id: number
          id?: number
        }
        Update: {
          category_id?: number
          channel_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "channel_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "channel_category_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channel"
            referencedColumns: ["id"]
          },
        ]
      }
      channel_language: {
        Row: {
          channel_id: number
          id: number
          language_id: number
        }
        Insert: {
          channel_id: number
          id?: number
          language_id: number
        }
        Update: {
          channel_id?: number
          id?: number
          language_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "channel_language_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "channel_language_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "language"
            referencedColumns: ["id"]
          },
        ]
      }
      language: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      letter_range: "A" | "B" | "C" | "D" | "E" | "F"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  mock_test: {
    Enums: {},
  },
  public: {
    Enums: {
      letter_range: ["A", "B", "C", "D", "E", "F"],
    },
  },
} as const
