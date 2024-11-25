<template>
  <el-card class="m-2">
    <el-container class="game-container">
      <!-- 游戏标题 -->
      <el-header class="game-header">
        <h1>背单词小游戏(CET4版)</h1>
      </el-header>

      <el-main>
        <!-- 游戏信息 -->
        <el-row justify="center" class="info">
          <el-col :span="12">
            <el-card>
              <p v-if="isGameStarted">
                剩余时间：<span class="highlight">{{ timer }}</span> 秒
              </p>
              <p v-if="isGameStarted">
                得分：<span class="highlight">{{ score }}</span>
              </p>
            </el-card>
          </el-col>
        </el-row>

        <!-- 开始游戏按钮 -->
        <el-row justify="center" class="start-button" v-if="!isGameStarted">
          <el-col :span="12">
            <el-button
              type="primary"
              size="large"
              @click="handleStartGame"
              style="width: 100%"
            >
              开始游戏
            </el-button>
          </el-col>
        </el-row>

        <!-- 单词显示 -->
        <el-row
          justify="center"
          class="word-display"
          v-if="isGameStarted && !isGameOver"
        >
          <el-col :span="12">
            <div class="current-word">
              <span>{{ currentWord }}</span>
            </div>
          </el-col>
        </el-row>

        <!-- 输入框 -->
        <el-row
          justify="center"
          v-if="isGameStarted && !isGameOver"
          class="input-box"
        >
          <el-col :span="12">
            <el-input
              v-model="input"
              placeholder="输入单词并按回车"
              @keyup.enter="checkInput"
              clearable
              size="large"
            />
          </el-col>
        </el-row>

        <!-- 游戏结束弹窗 -->
        <el-dialog
          v-model="isDialogVisible"
          title="游戏结束"
          width="50%"
          :close-on-click-modal="false"
          :show-close="false"
        >
          <p>时间到了！</p>
          <p>你的得分是：{{ score }}</p>

          <!-- 展示单词和翻译 -->
          <div v-if="completedWords.length > 0">
            <h3>你输入过的单词及其翻译：</h3>
            <ul>
              <li v-for="(word, index) in completedWords" :key="index">
                <strong>{{ word.word }}</strong> - {{ word.translation }}
              </li>
            </ul>
          </div>

          <template #footer>
            <el-button type="primary" @click="restartGame">重新开始</el-button>
          </template>
        </el-dialog>
      </el-main>
    </el-container>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

const initialWords = [
  { word: "abandon", translation: "放弃" },
  { word: "boundary", translation: "边界" },
  { word: "calculation", translation: "计算" },
  { word: "desirable", translation: "理想的" },
  { word: "emergency", translation: "紧急情况" },
  { word: "favourable", translation: "有利的" },
  { word: "gloomy", translation: "阴暗的" },
  { word: "honourable", translation: "可敬的" },
  { word: "improvement", translation: "改善" },
  { word: "jealous", translation: "嫉妒的" },
  { word: "knowledge", translation: "知识" },
  { word: "lieutenant", translation: "中尉" },
  { word: "maintenance", translation: "维护" },
  { word: "nuisance", translation: "麻烦事" },
];

const words = ref([...initialWords]);
const currentWord = ref("");
const input = ref("");
const score = ref(0);
const timer = ref(30);
const isGameOver = ref(false);
const isDialogVisible = ref(false);
const completedWords = ref([]);
const isGameStarted = ref(false); // 游戏是否已经开始

let timerInterval = null;

const generateWord = () => {
  if (words.value.length === 0) {
    isGameOver.value = true;
    isDialogVisible.value = true;
    clearInterval(timerInterval);
    return;
  }

  const randomIndex = Math.floor(Math.random() * words.value.length);
  currentWord.value = words.value[randomIndex].word;
  words.value.splice(randomIndex, 1);
};

const checkInput = () => {
  if (input.value.trim() === "") {
    ElMessage({
      message: "请输入单词后再按回车！",
      type: "warning",
      duration: 2000,
    });
    return;
  }

  const correctWord = initialWords.find((w) => w.word === currentWord.value);

  if (input.value.trim().toLowerCase() === correctWord.word.toLowerCase()) {
    score.value++;
    completedWords.value.push({
      word: correctWord.word,
      translation: correctWord.translation,
    });
    input.value = "";
    generateWord();
  } else {
    ElMessage({
      message: "单词输入错误，请重新尝试！",
      type: "error",
      duration: 2000,
    });
  }
};

const startGame = () => {
  score.value = 0;
  timer.value = 30;
  completedWords.value = [];
  words.value = [...initialWords];
  isGameOver.value = false;
  isDialogVisible.value = false;
  input.value = "";
  generateWord();

  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(timerInterval);
      isGameOver.value = true;
      isDialogVisible.value = true;
    }
  }, 1000);
};

const handleStartGame = () => {
  isGameStarted.value = true;
  startGame();
};

const restartGame = () => {
  isGameStarted.value = false; // 重置为未开始状态
  clearInterval(timerInterval);
};
</script>

<style lang="scss">
.game-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .game-header {
    color: #000;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 60px;
  }

  .info {
    margin-top: 20px;

    .highlight {
      font-size: 1.2rem;
      font-weight: bold;
      color: #409eff;
    }
  }

  .word-display {
    margin: 30px 0;

    .current-word {
      text-align: center;
      font-size: 5rem;
      font-weight: bold;
      color: #f56c6c;
    }
  }

  .input-box {
    margin-top: 20px;
  }

  .start-button {
    margin-top: 40px;
  }
}
</style>
