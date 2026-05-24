import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const pillars = [
  ['Persona', '이름, 호칭, 말투, 작업 원칙을 정해 일관된 비서 경험을 만듭니다.'],
  ['Memory', '오래 유지되는 선호와 환경 정보만 압축해서 기억합니다.'],
  ['Skills', '반복 절차와 실패 대응법을 재사용 가능한 스킬로 축적합니다.'],
  ['Domain Archives', '큰 자료 묶음은 도메인 아카이브로 분리해 필요할 때 읽습니다.'],
  ['Automation', '정기 보고와 점검은 cron과 script로 자동화합니다.'],
];

export default function Home() {
  return (
    <Layout title="루미 성장 기록" description="Hermes Agent 기반 개인 AI 비서 성장기">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.badge}>Hermes Agent · Personal AI Assistant · Weekly Growth Log</p>
            <Heading as="h1" className={styles.title}>루미처럼 성장하는 개인 AI 비서 만들기</Heading>
            <p className={styles.subtitle}>AI를 직접 재학습시키지 않아도, 페르소나·장기기억·스킬·도메인 아카이브·자동화 루프를 설계하면 개인 AI 비서는 일주일 단위로 성장합니다.</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/blog/personal-ai-assistant-growth">첫 글 읽기</Link>
              <Link className="button button--secondary button--lg" to="/docs/intro">가이드 보기</Link>
            </div>
          </div>
        </section>
        <section className="container margin-vert--xl">
          <div className={styles.grid}>
            {pillars.map(([title, desc]) => (
              <article className={styles.card} key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
