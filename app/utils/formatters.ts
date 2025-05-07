/**
 * 問題IDを整数に変換する（例："001" -> 1）
 */
export const parseQuestionId = (id: string): number => {
    return parseInt(id, 10);
  };
  
  /**
   * 進捗率を計算する
   */
  export const calculateProgress = (answers: (string | null)[], total: number): number => {
    const answeredCount = answers.filter(answer => answer !== null).length;
    return (answeredCount / total) * 100;
  };
  
  /**
   * 正解率に応じたフィードバックメッセージを返す
   */
  export const getFeedbackMessage = (score: number, total: number): string => {
    const percentage = (score / total) * 100;
    
    if (percentage >= 80) {
      return '优秀! 你对环境设备学科知识掌握得很好!';
    } else if (percentage >= 60) {
      return '不错! 再多练习一下就能更好!';
    } else if (percentage >= 40) {
      return '继续加油! 可以重复测试来提高成绩。';
    } else {
      return '需要更多练习! 不要放弃，坚持学习！';
    }
  };
  
  /**
   * 問題文から番号を削除する
   */
  export const cleanQuestionText = (questionText: string): string => {
    return questionText.replace(/^\d+\.\s+/, '');
  };