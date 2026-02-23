import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// ─── colour tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#070707',
  primary: '#FFCBA5',
  text: '#727171',
  white: '#FFFFFF',
  divider: 'rgba(128,128,128,0.23)',
};

// ─── small reusable pieces ────────────────────────────────────────────────────

const SectionTitle = ({ label }: { label: string }) => (
  <Text style={s.sectionTitle}>{label.toUpperCase()}</Text>
);

const PreTitle = ({ children }: { children: React.ReactNode }) => <Text style={s.preTitle}>{children}</Text>;
const ItemTitle = ({ children }: { children: React.ReactNode }) => <Text style={s.itemTitle}>{children}</Text>;
const ItemSubtitle = ({ children }: { children: React.ReactNode }) => <Text style={s.itemSubtitle}>{children}</Text>;
const Description = ({ children }: { children: React.ReactNode }) => <Text style={s.description}>{children}</Text>;

// ─── main screen ──────────────────────────────────────────────────────────────

export default function ResumeScreen() {
  return (
    <ScrollView style={s.screen} contentContainerStyle={s.container}>

      {/* ── PROFILE ── */}
      <View style={s.profileRow}>
        {/* <Image
          source={require('../assets/images/profileImage.png')}
          style={s.avatar}
          resizeMode="cover"
        /> */}
        <View style={s.profileText}>
          <Text style={s.firstName}>QUINN{'\n'}LYNNARD</Text>
          <Text style={s.lastName}>CASTRO</Text>
          <Text style={s.profileJobTitle}>USTP Student</Text>
          <Description>
            I'm Quinn Lynnard Castro, a Southern Philippines College (SPC) Graduate now
            studying BS Information Technology at USTP.
          </Description>
          <TouchableOpacity onPress={() => Linking.openURL('https://yoursite.com/cv.pdf')}>
            <Text style={s.downloadBtn}>Download Resume</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── TWO-COLUMN AREA ── */}
      <View style={s.columns}>

        {/* ── LEFT COLUMN ── */}
        <View style={s.col}>

          {/* Expertise */}
          <View>
            <SectionTitle label="Expertise" />
            {['JavaScript', 'PHP & WordPress', 'HTML CSS', 'Sleeping', 'Eating'].map(skill => (
              <Text key={skill} style={s.bulletItem}>• {skill}</Text>
            ))}
          </View>

          {/* Reference */}
          <View style={s.section}>
            <SectionTitle label="Reference" />
            <View style={s.refItem}>
              <Text style={s.refName}>Tig Alsag Bugas</Text>
              <Description>Ambot asa ko gibutang nganong nag alsa ko</Description>
            </View>
            <View style={s.refItem}>
              <Text style={s.refName}>Tig Higugma sa taong wako higugmaa</Text>
              <Description>Magabaan ra unta to sya</Description>
            </View>
          </View>

          {/* Education */}
          <View style={s.section}>
            <SectionTitle label="Education" />
            <View style={s.eduItem}>
              <PreTitle>2012–2021</PreTitle>
              <ItemTitle>Southern Philippines College</ItemTitle>
              <ItemSubtitle>SPC</ItemSubtitle>
            </View>
            <View style={s.eduItem}>
              <PreTitle>2022 – Into The Unknown</PreTitle>
              <ItemTitle>University of Science and Technology of Southern Philippines</ItemTitle>
              <ItemSubtitle>USTP</ItemSubtitle>
            </View>
          </View>

          {/* Certification */}
          <View style={s.section}>
            <SectionTitle label="Certification" />
            <View style={s.eduItem}>
              <PreTitle>2018</PreTitle>
              <ItemTitle>Frontend Developer</ItemTitle>
              <Description>N/A</Description>
            </View>
          </View>
        </View>

        {/* ── RIGHT COLUMN ── */}
        <View style={s.col}>

          {/* Experience */}
          <View>
            <SectionTitle label="Experience" />
            {[
              "Developer on a software nga pirme ko naa pero dadto gyud syas iyaha :<",
              "Bisag unsaon og code sa script digyud mabag-o ang pagtrato niyas ako :<",
            ].map((desc, i) => (
              <View key={i} style={s.eduItem}>
                <PreTitle>2019 – present</PreTitle>
                <ItemTitle>Nard Software LTD.</ItemTitle>
                <ItemSubtitle>Frontend Developer</ItemSubtitle>
                <Description>{desc}</Description>
              </View>
            ))}
          </View>

          {/* Awards */}
          <View style={s.section}>
            <SectionTitle label="Awards" />
            <View style={s.eduItem}>
              <PreTitle>2019</PreTitle>
              <ItemTitle>Best Sleeping Schedules</ItemTitle>
              <Description>
                Quinn Lynnard Castro has been awarded with the Best Sleeping Schedules Award for
                his time management at every sleep could imagine.
              </Description>
            </View>
            <View style={s.eduItem}>
              <PreTitle>2019</PreTitle>
              <ItemTitle>Best Eater OMG!!</ItemTitle>
              <Description>
                Quinn Lynnard Castro has been awarded the best eater in the entire time because of
                his heavy eating; the other competitors are hungry.
              </Description>
            </View>
          </View>

          {/* Interests */}
          <View style={s.section}>
            <SectionTitle label="Interest" />
            <View style={s.interestRow}>
              {/* Replace emoji with <Feather> icons if you have the package */}
              {[
                { emoji: '🎵', label: 'Music' },
                { emoji: '📖', label: 'Books' },
                { emoji: '🗺️', label: 'Travel' },
              ].map(({ emoji, label }) => (
                <View key={label} style={s.interestItem}>
                  <Text style={s.interestEmoji}>{emoji}</Text>
                  <Text style={s.interestLabel}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* ── DIVIDER ── */}
      <View style={s.hr} />

      {/* ── CONTACT & SOCIALS ── */}
      <View style={s.bottomRow}>
        <View style={s.bottomCol}>
          <SectionTitle label="Contact" />
          <Description>Gran Europa, CDOC</Description>
          <Description>+63 966 58* ****</Description>
          <Description>skystrikebeasts@gmail.com</Description>
        </View>

        <View style={s.bottomCol}>
          <SectionTitle label="Socials" />
          {[
            { icon: '👤', handle: '/Quinn Lynnard Castro', url: '#' },
            { icon: '🐦', handle: '/@itsnardandersen', url: '#' },
            { icon: '📸', handle: '/@itsnardandersen', url: '#' },
          ].map(({ icon, handle, url }) => (
            <TouchableOpacity
              key={handle + icon}
              style={s.socialItem}
              onPress={() => url !== '#' && Linking.openURL(url)}
            >
              <Text style={s.socialIcon}>{icon}</Text>
              <Text style={s.socialHandle}>{handle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </ScrollView>
  );
}

// ─── styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.bg,
  },
  container: {
    padding: 24,
    paddingBottom: 48,
  },

  // ── profile ──
  profileRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  avatar: {
    width: 110,
    height: 130,
    borderRadius: 4,
  },
  profileText: {
    flex: 1,
    minWidth: 180,
  },
  firstName: {
    color: C.white,
    fontWeight: '200',
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: 26,
  },
  lastName: {
    color: C.primary,
    fontWeight: '700',
    fontSize: 40,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: -4,
  },
  profileJobTitle: {
    color: C.white,
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 2,
  },
  downloadBtn: {
    color: C.white,
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
  },

  // ── columns ──
  columns: {
    flexDirection: width > 600 ? 'row' : 'column',
    gap: 32,
  },
  col: {
    flex: 1,
    gap: 28,
  },

  // ── typography ──
  sectionTitle: {
    color: C.primary,
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  description: {
    color: C.text,
    fontSize: 13,
    fontWeight: '400',
    marginTop: 6,
    lineHeight: 19,
  },
  preTitle: {
    color: C.text,
    fontSize: 12,
    fontWeight: '300',
  },
  itemTitle: {
    color: C.white,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 4,
  },
  itemSubtitle: {
    color: C.text,
    fontSize: 13,
    fontWeight: '400',
  },

  // ── list items ──
  bulletItem: {
    color: C.text,
    fontSize: 13,
    lineHeight: 22,
    marginTop: 4,
    marginLeft: 8,
  },

  // ── section spacing ──
  section: {
    marginTop: 4,
  },
  refItem: {
    marginTop: 14,
  },
  refName: {
    color: C.white,
    fontSize: 14,
    fontWeight: '700',
  },
  eduItem: {
    marginTop: 14,
  },

  // ── interests ──
  interestRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 12,
  },
  interestItem: {
    alignItems: 'center',
    gap: 4,
  },
  interestEmoji: {
    fontSize: 22,
  },
  interestLabel: {
    color: C.text,
    fontSize: 12,
  },

  // ── divider ──
  hr: {
    borderTopWidth: 1,
    borderTopColor: C.divider,
    marginVertical: 28,
    marginHorizontal: '10%',
  },

  // ── bottom contact/social ──
  bottomRow: {
    flexDirection: width > 600 ? 'row' : 'column',
    gap: 28,
  },
  bottomCol: {
    flex: 1,
    gap: 4,
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  socialIcon: {
    fontSize: 16,
  },
  socialHandle: {
    color: C.text,
    fontSize: 13,
  },
});
