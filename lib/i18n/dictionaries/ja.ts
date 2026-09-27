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

    formTitle: "ファウンディングメンバーに参加する",
    formSubtitle: "一般公開の前に、あなたの席を確保してください。",
  },
  signup: {
    captchaEmailIntro:
      "セキュリティ確認を通過できませんでした。創設メンバーのリストに追加してください：",
    errCaptcha:
      "セキュリティ確認を完了できませんでした。VPN や制限のあるネットワークでは起こりうることで、お断りしたわけではありません。",
    captchaRetry: "もう一度試す",
    captchaEmail: "メールで登録する",
    captchaEmailSubject: "DancePro 創設メンバーへの登録",
    privacyLink: "情報の取り扱いについて",
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
    ageLabel: "年齢",
    age16: "16歳以上",
    ageUnder16: "16歳未満",
    parentEmail: "保護者のメールアドレス",
    errAge: "年齢を選んでください。",
    errParentEmail: "保護者のメールアドレスを入力してください。",
    pendingTitle: "あと一歩です",
    pendingBody: "{email} 宛にメールを送りました。保護者の方が承認すると、あなたの席が確保されます。",
    minorsUnavailable: "16歳未満の方はまだご登録いただけません。近日中にまたお越しください。",
  },
  consent: {
    metaTitle: "保護者の同意",
    title: "ダンサーの登録を承認する",
    body: "あるダンサーが、DancePro のファウンディングメンバーリストに参加するため、保護者としてあなたのアドレスを入力しました。承認されるまで、情報は保存されません。",
    confirm: "承認します",
    confirming: "送信中...",
    okTitle: "ありがとうございます。承認されました。",
    okBody: "ファウンディングメンバーリストの席が確保されました。",
    badTitle: "このリンクは使えませんでした",
    badBody: "期限が切れているか、すでに使われた可能性があります。トップページから登録し直せます。",
    emailSubject: "{name} さんの DancePro 登録の承認",
    emailIntro: "{name} さんが DancePro のファウンディングメンバーリストへの参加を希望し、保護者としてあなたのアドレスを入力しました。よろしければ、こちらから承認してください:",
    emailIgnore: "心当たりがない場合は、このメールは無視してください。情報は保存されません。",
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
    back: "DancePro に戻る",
    notFoundTitle: "そのリンクが見つかりませんでした",
    notFoundBody:
      "リンクの有効期限が切れているか、入力に誤りがある可能性があります。トップページからファウンディングメンバーにご登録ください。",
    referralMsg:
      "これまでに {referred} を紹介しています。あなたのリンクから参加したダンサーの数だけ、リストの順位が上がります。",
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
    s1Body:
      "名前、都市、踊る種目、ロール、レベル、そしてどんなパートナーシップを求めているか。プロフィールが正確なほど、見つかるダンサーの質も上がります。",
    s2Body:
      "種目・ロール・レベル・地域で絞り込んで探せます。あるいはプロフィールを公開したままにして、ふさわしい相手から見つけてもらうこともできます。",
    s3Body:
      "直接リクエストを送ります。相手は返事をする前に、あなたが何を踊り何を求めているかを確認できます。つながりは常に相互なので、承認なしにネットワークに加わることも、情報を見られることもありません。",
    s4Body:
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
    perksTitle: "ファウンディングメンバーが得られるもの",
    perkBadgeTitle: "ファウンディングメンバーのバッジ",
    perkBadgeBody:
      "メンバーでいる限りプロフィールに表示され続ける永久的な印。初日からここにいた証拠です。",
    perkAccessTitle: "先行アクセス",
    perkAccessBody: "誰よりも先に DancePro を使えます。",
    perkPricingTitle: "特別なローンチ価格",
    perkPricingBody:
      "ファウンディングメンバー向けに固定され、メンバーシップが有効な限り続きます。",
    laterTitle: "あとよりも今がいい理由",
    laterBody:
      "ファウンディングメンバーの資格は、DancePro が一般公開される日に締め切られます。あとから得られるものではありません。ローンチ価格も、バッジも、先行アクセスも、この期間に参加した人だけのものです。あとから参加する人は全員ゼロからのスタートになります。",
    cta: "ファウンディングメンバーになる",
  },
  privacy: {
    metaTitle: "プライバシー",
    metaDescription:
      "DancePro の創設メンバーリストに登録する際に取得する情報、その目的、そして誰が見るのかについて。",
    eyebrow: "プライバシー",
    title: "プライバシーポリシー",
    updated: "最終更新：2026年9月26日",
    intro:
      "DancePro はまだ公開されていないネットワークの順番待ちリストです。このページは、このサイトが実際に行っていることを説明するものであり、長い規約が将来許すかもしれないことではありません。",

    collectTitle: "取得する情報",
    collectBody:
      "登録時：お名前、メールアドレス、選んだ種目。そのあとで、都市と国、ロール、レベルまたは競技クラス、探している相手を追加できます。これらの後から入力する項目はすべて任意で、入力しなくてもリストは機能します。",
    collectAgeBody:
      "年齢層もおうかがいします。16歳未満の場合は、保護者のメールアドレスをおうかがいしますが、その方に関する情報はそれ以外に取得しません。",
    collectRefBody:
      "他のダンサーの招待リンクから来られた場合は、どのリンクだったかを記録します。その方の招待数に反映するためです。",

    whyTitle: "取得する理由",
    whyBody:
      "DancePro が公開されたときにお知らせするため、そして開発の進み具合をときどきお伝えするためです。ダンスの情報を追加していただいた場合は、アクセスできるようになる前に相性の良い相手を用意するために使います。それ以外の宣伝はしませんし、メールアドレスを販売・貸与・交換することもありません。",

    sharingTitle: "ほかに見るのは誰か",
    sharingBody:
      "この情報を自社の目的で受け取る相手はいません。サイトを動かしている会社を経由するだけで、それも各社がその仕事をするためだけです。",
    sharingSupabase: "Supabase — 順番待ちリストのデータベースを保管します。",
    sharingVercel: "Vercel — サイトを提供し、これらのページを配信します。",
    sharingCloudflare:
      "Cloudflare — 登録フォームで「人間であることの確認」を実行します。見えるのは IP アドレスであり、入力内容ではありません。",
    sharingOpenMeteo:
      "Open-Meteo — 任意の都市入力欄を使うと、入力した文字が同社のサービスに送られ、該当する地名を探します。",
    sharingGmail:
      "Gmail — 唯一メールを送る場面である、保護者への確認メールを届けます。",

    minorsTitle: "16歳未満のダンサー",
    minorsBody:
      "16歳未満であるとお知らせいただいた場合、席は確保されますが、保護者がメールで承認するまで何の効力もありません。それまではメンバー数に含まれず、リスト上の順位もなく、誰の招待数にも数えられません。誰も承認しなければ、その登録は効力のないまま残ります。保護者の方はいつでも、理由を説明することなく、削除を求めてご連絡いただけます。",

    keepTitle: "保存する期間",
    keepBody:
      "DancePro が公開され、アカウントを作る機会を十分に得られるまで、または削除をご依頼いただくまでの、いずれか早いほうです。企画が進まなかった場合は、リスト全体を削除します。",

    cookiesTitle: "クッキー",
    cookiesBody:
      "クッキーはひとつだけで、どの言語で読んでいるかを覚えておくためのものです。このサイトに広告はなく、アクセス解析もありません。ここへ来る道も、ここを去る道も、何にも追跡されません。",

    rightsTitle: "選べること",
    rightsBody:
      "ご連絡いただければ、何を保存しているかをお伝えし、訂正または削除します。理由を述べる必要はありません。削除は削除であり、こっそり控えを残すことはしません。",

    contactTitle: "お問い合わせ",
    contactBody: "このページに関すること、またはここでお答えできていないことについては、こちらまで：",

    link: "プライバシー",
  },
  language: {
    label: "言語",
  },
};
