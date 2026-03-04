import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  useColorScheme,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Speech from "expo-speech";
import Colors from "@/constants/colors";
import { TENSES, TenseInfo, TenseId, VERBS, TENSE_NAMES } from "@/lib/italian-data";

function TenseCard({ tense, index }: { tense: TenseInfo; index: number }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? Colors.dark : Colors.light;
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(e => !e);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const speakExample = (text: string) => {
    Speech.speak(text, { language: 'it-IT', rate: 0.8 });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const accentColors = [
    Colors.palette.wine,
    Colors.palette.terracotta,
    Colors.palette.gold,
    Colors.palette.wineDark,
    Colors.palette.terracottaLight,
    Colors.palette.goldLight,
    Colors.palette.wine,
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <View style={[styles.tenseCard, { backgroundColor: theme.card }]}>
      <TouchableOpacity style={styles.tenseHeader} onPress={toggle} activeOpacity={0.7}>
        <View style={[styles.tenseAccent, { backgroundColor: accent + "22" }]}>
          <Text style={[styles.tenseNumber, { color: accent }]}>{String(index + 1).padStart(2, '0')}</Text>
        </View>
        <View style={styles.tenseTitles}>
          <Text style={[styles.tenseNameItalian, { color: theme.text }]}>{tense.italianName}</Text>
          <Text style={[styles.tenseNameEnglish, { color: theme.textSecondary }]}>{tense.name}</Text>
        </View>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={theme.textMuted}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={[styles.tenseBody, { borderTopColor: theme.separator }]}>
          <View style={[styles.whenBox, { backgroundColor: accent + "12" }]}>
            <Text style={[styles.whenLabel, { color: accent }]}>When to use</Text>
            <Text style={[styles.whenText, { color: theme.text }]}>{tense.when}</Text>
          </View>

          {tense.trigger && (
            <View style={styles.triggerRow}>
              <Ionicons name="flash-outline" size={13} color={theme.textMuted} />
              <Text style={[styles.triggerText, { color: theme.textMuted }]}>
                Key words: {tense.trigger}
              </Text>
            </View>
          )}

          {tense.formation && (
            <View style={[styles.formationBox, { backgroundColor: theme.backgroundSecondary }]}>
              <Text style={[styles.formationLabel, { color: theme.textSecondary }]}>Formation</Text>
              <Text style={[styles.formationText, { color: theme.text }]}>{tense.formation}</Text>
            </View>
          )}

          <Text style={[styles.examplesLabel, { color: theme.textSecondary }]}>Examples</Text>

          {tense.examples.map((ex, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.exampleRow, { backgroundColor: theme.backgroundSecondary }]}
              onPress={() => speakExample(ex.italian)}
              activeOpacity={0.7}
            >
              <View style={styles.exampleContent}>
                <Text style={[styles.exampleItalian, { color: theme.text }]}>{ex.italian}</Text>
                <Text style={[styles.exampleEnglish, { color: theme.textSecondary }]}>{ex.english}</Text>
              </View>
              <Ionicons name="volume-medium-outline" size={16} color={theme.textMuted} />
            </TouchableOpacity>
          ))}

          <ConjugationTable tenseId={tense.id} accent={accent} theme={theme} isDark={isDark} />
        </View>
      )}
    </View>
  );
}

function ConjugationTable({
  tenseId,
  accent,
  theme,
  isDark,
}: {
  tenseId: TenseId;
  accent: string;
  theme: typeof Colors.light;
  isDark: boolean;
}) {
  const verb = VERBS.find(v => v.id === 'parlare');
  if (!verb) return null;
  const conjugation = verb.tenses[tenseId];
  if (!conjugation) return null;

  const rows = [
    { pronoun: 'io', form: conjugation.io },
    { pronoun: 'tu', form: conjugation.tu },
    { pronoun: 'lui/lei', form: conjugation.lui },
    { pronoun: 'noi', form: conjugation.noi },
    { pronoun: 'voi', form: conjugation.voi },
    { pronoun: 'loro', form: conjugation.loro },
  ];

  return (
    <View style={styles.tableWrap}>
      <Text style={[styles.tableTitle, { color: theme.textSecondary }]}>
        Parlare (to speak) — {TENSE_NAMES[tenseId]}
      </Text>
      <View style={[styles.table, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
        {rows.map((row, i) => (
          <View
            key={row.pronoun}
            style={[
              styles.tableRow,
              i < rows.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
            ]}
          >
            <Text style={[styles.tablePronoun, { color: theme.textMuted }]}>{row.pronoun}</Text>
            <Text style={[styles.tableForm, { color: accent }]}>{row.form}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function TensesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? Colors.dark : Colors.light;
  const insets = useSafeAreaInsets();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingTop: topPad + 16, paddingBottom: bottomPad + 24 },
        ]}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Tempi Verbali</Text>
          <Text style={[styles.headerSub, { color: theme.textSecondary }]}>
            Italian verb tenses — tap to explore
          </Text>
        </View>

        <View style={[styles.introCard, { backgroundColor: Colors.palette.wine }]}>
          <Text style={styles.introTitle}>7 Essential Tenses</Text>
          <Text style={styles.introText}>
            Master these tenses and you'll handle 95% of everyday Italian conversation.
            Each card shows when to use the tense, trigger words, and real examples.
          </Text>
          <View style={styles.introRow}>
            <Ionicons name="volume-high-outline" size={14} color="rgba(255,255,255,0.7)" />
            <Text style={styles.introHint}>Tap any example to hear it in Italian</Text>
          </View>
        </View>

        <View style={styles.tenseList}>
          {TENSES.map((tense, i) => (
            <TenseCard key={tense.id} tense={tense} index={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingHorizontal: 20, gap: 0 },
  header: { marginBottom: 16 },
  headerTitle: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    letterSpacing: -0.5,
  },
  headerSub: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    marginTop: 4,
  },
  introCard: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    gap: 8,
  },
  introTitle: {
    fontSize: 17,
    fontFamily: "Inter_700Bold",
    color: "#FFF",
    letterSpacing: -0.3,
  },
  introText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    color: "rgba(255,255,255,0.82)",
    lineHeight: 19,
  },
  introRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  introHint: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "rgba(255,255,255,0.65)",
  },
  tenseList: {
    gap: 10,
  },
  tenseCard: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  tenseHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 14,
  },
  tenseAccent: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tenseNumber: {
    fontSize: 15,
    fontFamily: "Inter_700Bold",
  },
  tenseTitles: { flex: 1 },
  tenseNameItalian: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: -0.2,
  },
  tenseNameEnglish: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 1,
  },
  tenseBody: {
    borderTopWidth: 1,
    padding: 16,
    gap: 14,
  },
  whenBox: {
    borderRadius: 12,
    padding: 14,
    gap: 6,
  },
  whenLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  whenText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
  triggerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  triggerText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    flex: 1,
    fontStyle: "italic",
  },
  formationBox: {
    borderRadius: 10,
    padding: 12,
    gap: 4,
  },
  formationLabel: {
    fontSize: 10,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  formationText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
  },
  examplesLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: -4,
  },
  exampleRow: {
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  exampleContent: { flex: 1, gap: 3 },
  exampleItalian: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    fontStyle: "italic",
    lineHeight: 20,
  },
  exampleEnglish: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 17,
  },
  tableWrap: { gap: 8 },
  tableTitle: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  table: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  tablePronoun: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    minWidth: 70,
  },
  tableForm: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
});
