import type { Dictionary } from "./en";

// 種目名とディビジョン名は国際表記のままにしています。世界中どの
// フロアでも競技者はこの呼び方をするため、訳すとかえって伝わりません。
export const ja: Dictionary = {
  nav: {
    howItWorks: "使い方",
    danceStyles: "種目",
    foundingMembers: "ファウンディングメンバー",
    joinWaitlist: "リストに登録",
    home: "DancePro ホーム",
  },
  footer: {
    tagline: "ダンサーのためのプロフェッショナルなネットワーク。",
  },
  home: {
    metaTitle: "DancePro — 次のパートナーを見つけよう",
    metaDescription:
      "ballroom と latin のダンサーのためのプロフェッショナルネットワーク。パートナー、コーチ、競技会、そしてシューズやドレスのマーケットプレイス。ファウンディングメンバーに参加しませんか。",
    heroTitle: "次のパートナーを見つけよう。",
    heroSubtitle:
      "ballroom と latin のダンサーのためのプロフェッショナルネットワーク。パートナー、コーチ、競技会、マーケットプレイスがひとつの場所に。",
    heroCta: "ファウンディングメンバーになる",
    socialProof: "すでにリストにいる {count} 人のダンサーに加わりましょう。",

    ideaEyebrow: "こんな体験です",
    ideaTitle: "午後のうちにパートナーが見つかる。",
    ideaBody:
      "踊る種目、レベル、ロールを伝えれば、まさにそれを探している人が見つかります。同じスタジオにも、地球の裏側にも、あなたのいる場所へ引っ越す用意のある人にも。グループへの投稿も、コーチが探してくれるのを待つ必要もありません。同じように練習し、同じ勝利を目指し、同じ夜に時間がある相手。",

    pillarsEyebrow: "パートナー探しだけではありません",
    pillarsTitle: "ダンスの世界すべてを、ひとつの場所に。",
    pillarsIntro:
      "パートナー探しは DancePro の出発点であって、終点ではありません。ダンサーに必要なものすべてのためのネットワークです。",
    pillarPartnerTitle: "パートナー探し",
    pillarPartnerBody:
      "種目・レベル・ロール・活動地域から、競技用、練習用、ソーシャル用のパートナーを探せます。",
    pillarMarketTitle: "マーケットプレイス",
    pillarMarketBody:
      "他のダンサーが出品する競技用ドレスの販売・レンタルに加えて、あなたがすでに使っているブランドの新しいシューズ、ドレス、練習着も。",
    pillarCoachingTitle: "コーチング",
    pillarCoachingBody:
      "指導者は何をどこで教えているかを掲載します。生徒は種目・レベル・都市から探せます。",
    pillarCompsTitle: "競技会",
    pillarCompsBody:
      "これから何があるのか、誰が出るのか、自分が何に向けて練習しているのかが見えます。",

    stepsEyebrow: "こう動きます",
    stepsTitle: "4つのステップ、余計なものなし。",
    step1Title: "プロフィールを作る",
    step1Body:
      "種目、ロール、レベル、活動地域。パートナーが本当に知りたいことだけを。",
    step2Title: "探す、あるいは見つけてもらう",
    step2Body:
      "近くでも世界中でも条件の合うダンサーを探せますし、相手から見つけてもらうこともできます。",
    step3Title: "つながる",
    step3Body:
      "コネクションリクエストを送り、相手が承認します。つながりは常に相互なので、どの会話も「はい」から始まります。",
    step4Title: "アプリ内でやりとりする",
    step4Body:
      "練習、競技会、パートナーシップの調整をひとつの場所で。",
    stepsLink: "全体像を見る",

    benefitsEyebrow: "ファウンディングメンバー",
    benefitsTitle: "早く来た人が得られるもの。",
    benefitBadgeTitle: "ファウンディングメンバーのバッジ",
    benefitBadgeBody:
      "最初からここにいたことを示す、プロフィール上の永久的な印。",
    benefitAccessTitle: "先行アクセス",
    benefitAccessBody: "一般公開より先に DancePro を使えます。",
    benefitPricingTitle: "特別なローンチ価格",
    benefitPricingBody: "メンバーでいる限り、その価格のまま固定されます。",
    benefitEventsTitle: "限定イベント",
    benefitEventsBody:
      "ファウンディングメンバーの集まりと、DancePro 主催のパーティー。",
    benefitVoteTitle: "次に何を作るかへの発言権",
    benefitVoteBody:
      "ファウンディングメンバーからの要望が最優先で形になります。",

    formTitle: "ファウンディングメンバーに参加する",
    formSubtitle: "一般公開の前に、あなたの席を確保してください。",
  },
  signup: {
    firstName: "お名前",
    email: "メールアドレス",
    danceStyles: "種目",
    submit: "ファウンディングメンバーになる",
    submitting: "送信中...",
    footnote: "10秒で終わります。詳細はあとから追加できます。",
    errName: "お名前を入力してください。",
    errEmail: "メールアドレスを入力してください。",
    errEmailInvalid: "有効なメールアドレスを入力してください。",
    errStyles: "種目を1つ以上選んでください。",
    errGeneric:
      "送信中に問題が発生しました。少し時間をおいてもう一度お試しください。",
  },
  profile: {
    inviteTitle: "公開初日に最初の候補が揃っているとしたら？",
    inviteBody:
      "どこで踊っているか、ロール、そして何を探しているかを追加してください。アクセスできる日に合う相手を揃えておきます。15秒ほどで終わります。",
    inviteCta: "詳細を追加する",
    savedTitle: "ありがとうございます。",
    savedBody:
      "ダンスの情報を保存しました。公開前に最初の候補を揃えるために使わせていただきます。",
    editCta: "詳細を編集する",
    location: "活動地域",
    locationPlaceholder: "都市名を入力してください",
    locationSearching: "検索中...",
    locationNoMatch: "該当なし。入力された内容をそのまま使います。",
    role: "ロール",
    level: "レベル",
    levelPlaceholder: "レベルを選択",
    division: "ディビジョン",
    lookingFor: "探しているもの",
    save: "情報を保存する",
    saving: "保存中...",
    cancel: "キャンセル",
    errLocation: "近くの相手を探せるように、都市名を入力してください。",
    errRole: "踊るロールを選んでください。",
    errGeneric:
      "ただいま保存できませんでした。少し時間をおいてもう一度お試しください。",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "どちらも",
  },
  levels: {
    beginner: "初級",
    intermediate: "中級",
    advanced: "上級",
    competitive: "競技",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "競技パートナー",
    "Practice partner": "練習パートナー",
    "Social dance partner": "ソーシャルダンスのパートナー",
    "Performance partner": "デモンストレーションのパートナー",
    Coach: "コーチ",
    Students: "生徒",
    Other: "その他",
  },
  welcome: {
    metaTitle: "ようこそ",
    metaDescription:
      "DancePro のファウンディングメンバー登録リストに入っています。",
    youreIn: "登録できました",
    position: "あなたは {position} 番目です。",
    total: {
      one: "これまでに {total} 人のダンサーがファウンディングメンバーのリストに参加しています。",
      few: "これまでに {total} 人のダンサーがファウンディングメンバーのリストに参加しています。",
      many: "これまでに {total} 人のダンサーがファウンディングメンバーのリストに参加しています。",
      other:
        "これまでに {total} 人のダンサーがファウンディングメンバーのリストに参加しています。",
    },
    moveUp: "リストで順位を上げる",
    copyLink: "リンクをコピー",
    copied: "コピーしました！",
    tier3: "リストで順位が上がる",
    tier10: "公開時の優先アクセス",
    tier25: "VIP ファウンディングステータス",
    referralsLabel: "紹介 {count} 人",
    back: "DancePro に戻る",
    notFoundTitle: "そのリンクが見つかりませんでした",
    notFoundBody:
      "リンクの有効期限が切れているか、入力に誤りがある可能性があります。トップページからファウンディングメンバーにご登録ください。",
    tierMsgToFirst:
      "これまでに {referred} を紹介しています。あと {remaining} 人でリストの順位が上がります。",
    tierMsgToPriority:
      "これまでに {referred} を紹介し、リストの順位が上がりました。あと {remaining} 人で公開時の優先アクセスが得られます。",
    tierMsgToVip:
      "これまでに {referred} を紹介し、公開時の優先アクセスを獲得しました。あと {remaining} 人で VIP ファウンディングステータスです。",
    tierMsgMax:
      "これまでに {referred} を紹介し、VIP ファウンディングステータスを獲得しました。一緒に作ってくださってありがとうございます。",
    dancers: {
      one: "人のダンサー",
      few: "人のダンサー",
      many: "人のダンサー",
      other: "人のダンサー",
    },
  },
  howItWorks: {
    metaTitle: "使い方",
    metaDescription:
      "DancePro が ballroom と latin のダンサーをどうつなぐか。プロフィールを作り、探すか見つけてもらい、コネクションリクエストを送り、アプリ内でやりとりします。",
    eyebrow: "使い方",
    title: "DancePro の使い方",
    intro:
      "DancePro のすべては、ひとつのことを中心に作られています。あなたの練習と競技の目標に合ったパートナーを見つけることです。",
    s1Title: "プロフィールを作る",
    s1Body:
      "ダンサーとしてのプロフィールを整えます。名前、都市、踊る種目、競技レベル、そしてどんなパートナーシップを求めているか。",
    s2Title: "種目・ロール・レベルを設定する",
    s2Body:
      "具体的に。Leader、Follower、またはその両方。初級から Professional まで。International Latin や Argentine Tango など。プロフィールが正確なほど、見つかるダンサーの質も上がります。",
    s3Title: "条件の合うダンサーを探す、または見つけてもらう",
    s3Body:
      "種目・ロール・レベル・地域で絞り込んで探せます。あるいはプロフィールを公開したままにして、ふさわしい相手から見つけてもらうこともできます。",
    s4Title: "コネクションリクエストを送る",
    s4Body:
      "直接、そして礼儀正しく。相手は返事をする前に、あなたが何を踊り何を求めているかを確認できます。",
    s5Title: "相手が承認する",
    s5Body:
      "つながりは常に相互です。承認なしに誰かがあなたのネットワークに加わることも、あなたの情報を見ることもありません。",
    s6Title: "アプリ内でやりとりする",
    s6Body:
      "つながったあとは、練習スケジュール、競技会の計画、段取りをダンサーのために作られた場所でまとめて調整できます。",
    cta: "ファウンディングメンバーになる",
  },
  danceStyles: {
    metaTitle: "種目",
    metaDescription:
      "DancePro で International Latin、International Ballroom、American Smooth、American Rhythm、Argentine Tango、ソーシャルダンスのパートナーを見つけましょう。",
    eyebrow: "種目",
    title: "DancePro の種目",
    intro:
      "種目を正確に設定すれば、DancePro が同じ種目を踊るパートナーを見つける手助けをします。競技のタイトルを目指す人にも、金曜夜のソーシャルを楽しむ人にも。",
    catInternational: "International Style",
    catInternationalBlurb: "世界中で踊られている国際競技の標準。",
    catAmerican: "American Style",
    catAmericanBlurb:
      "オープンな振り付けとソロワークが多いアメリカンのシラバス。",
    catOther: "ソーシャルとラテンのカップルダンス",
    catOtherBlurb: "ソーシャルのフロア、パーティー、シラバス外のすべて。",
    styleDescriptions: {
      "International Latin":
        "Cha Cha、Samba、Rumba、Paso Doble、Jive。国際競技規則のもとで踊られるラテン5種目で、鋭いテクニックとリズムの正確さの上に成り立っています。",
      "International Ballroom":
        "Waltz、Tango、Viennese Waltz、Foxtrot、Quickstep。クローズドホールドで踊られ、なめらかに移動するフレームが競技ボールルームで最も古典的なこの種目を特徴づけています。",
      "American Smooth":
        "Waltz、Tango、Foxtrot、Viennese Waltz のアメリカン版。オープンな振り付けとソロワークがクローズドホールドに織り込まれます。",
      "American Rhythm":
        "Cha Cha、Rumba、East Coast Swing、Bolero、Mambo。アメリカンのシラバスらしい、床を捉えた表情豊かなスタイルで踊ります。",
      "Argentine Tango":
        "ブエノスアイレスのミロンガで生まれた即興のタンゴ。抱擁からリードし、決まった型よりもつながりと音楽性が重んじられます。",
      "Social Dance":
        "Salsa、Bachata、Merengue など、ソーシャルフロアのダンス。採点表のためではなくその夜のために踊り、その場でリードとフォローが交わされます。",
      Other:
        "West Coast Swing、Zouk、Country Two-Step、そのほかカップルで踊るすべて。登録のときに何を踊るか教えてください。",
    },
    closing:
      "自分の種目が見当たりませんか。それでもぜひご登録ください。何を踊るか教えていただければ、最初からこのネットワークの形づくりに加わっていただけます。",
    cta: "ファウンディングメンバーになる",
  },
  foundingMembers: {
    metaTitle: "ファウンディングメンバー",
    metaDescription:
      "DancePro のファウンディングメンバーが得られるもの、コミュニティを最優先する理由、そして公開前に参加するほうが良い理由。",
    eyebrow: "プログラム",
    title: "ファウンディングメンバープログラム",
    intro:
      "ファウンディングメンバーとは、DancePro が一般公開される前に参加したダンサーのことです。それが何を意味し、その一人になると何が得られるのかをご説明します。",
    firstTitle: "最初にいるということの本当の意味",
    firstPara1:
      "ファウンディングメンバーは DancePro がどうなっていくかを形づくります。どの都市で最も強くなるか、どの種目が充実するか、次に何が作られるか。いま参加すれば、ただネットワークにいるだけでなく、そこにいる価値そのものを作る一人になります。",
    firstPara2:
      "新しく来たダンサーが最初に目にするプロフィールの中にあなたがいて、二度と配られないバッジが付いています。",
    perksTitle: "ファウンディングメンバーが得られるもの",
    perkBadgeTitle: "ファウンディングメンバーのバッジ",
    perkBadgeBody:
      "メンバーでいる限りプロフィールに表示され続ける永久的な印。初日からここにいた証拠です。",
    perkAccessTitle: "先行アクセス",
    perkAccessBody: "誰よりも先に DancePro を使えます。",
    perkPricingTitle: "特別なローンチ価格",
    perkPricingBody:
      "ファウンディングメンバー向けに固定され、メンバーシップが有効な限り続きます。",
    perkEventsTitle: "限定イベント",
    perkEventsBody:
      "ファウンディングメンバーの集まり、パーティー、そして誰よりも早く次の機能を見られる機会。",
    perkVoteTitle: "次に何を作るかへの発言権",
    perkVoteBody:
      "ファウンディングメンバーからの要望が最優先で形になります。何が必要かを教えてください。",
    laterTitle: "あとよりも今がいい理由",
    laterBody:
      "ファウンディングメンバーの資格は、DancePro が一般公開される日に締め切られます。あとから得られるものではありません。ローンチ価格も、バッジも、何を作るかへの発言権も、この期間に参加した人だけのものです。あとから参加する人は全員ゼロからのスタートになります。",
    cta: "ファウンディングメンバーになる",
  },
  language: {
    label: "言語",
  },
};
